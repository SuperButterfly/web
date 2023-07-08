// require('dotenv').config();
const axios = require('axios')
const { Instance, Template } = require('../../database.js')
const { SCW_PROJECT_ID, API_URL, HEADERS } = require('../../utils/consts.js')

const postInstance = async (req, res) => {
  try {
    const { instanceData, idTemplate, sendFiles } = req.body
    instanceData.project = SCW_PROJECT_ID

    const response = await axios.post(API_URL, instanceData, { HEADERS })
    const { id, name, volumes } = response.data.server
    console.log(response.data)
    const volumeId = volumes['0'].id
    const template = await Template.findByPk(idTemplate)
    if (!template) throw new Error('Template not found')

    if (sendFiles) {
      await uploadProjectFilesToInstance(id, name, template)
    }
    const newInstance = await Instance.create(
      { id, name, volumeId },
      { id, name, volumeId }
    )
    await newInstance.setTemplate(template.id)
    newInstance.save()

    res
      .status(201)
      .json({ message: 'Instance created successfully', instance: newInstance })
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Error creating instance', message: error.message })
  }
}

const uploadProjectFilesToInstance = async (
  instanceId,
  instanceName,
  projectFiles
) => {
  const formData = new FormData()

  Object.keys(projectFiles).forEach((file) => {
    formData.append('files', file, file.name)
  })

  try {
    const response = await axios.put(
      `${API_URL}/${instanceId}/user_data`,
      formData,
      {
        HEADERS: {
          ...HEADERS,
          'Content-Type': 'multipart/form-data'
        }
      }
    )

    console.log(`Files uploaded to instance ${instanceName}:`, response.data)
  } catch (error) {
    console.error(
      `Error uploading files to instance ${instanceName}:`,
      error.message
    )
  }
}

const updateInstance = async (req, res) => {
  try {
    const { instanceData, instanceId } = req.body
    const response = await axios.patch(API_URL, instanceData, { HEADERS })
    console.log(response.data)

    const instanceToUpd = await Instance.findByPk(instanceId)
    if (!instanceToUpd) throw new Error('Instance not found')

    await instanceToUpd.update(instanceData)

    res.status(200).json({
      message: 'Instance updated successfully',
      instance: instanceToUpd
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { postInstance, updateInstance }
