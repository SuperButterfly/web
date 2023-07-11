// require('dotenv').config();
const axios = require('axios')
const { Instance, Template } = require('../../database.js')
const { SCW_PROJECT_ID, API_URL, HEADERS, SSH_KEY_ID } = require('../../utils/consts.js')

const postInstance = async (req, res) => {
  try {
    const { projectData, sendFiles } = req.body

    const instanceData = {
      name: `/var/www/${projectData.name}`,
      project: SCW_PROJECT_ID,
      commercial_type: 'GP1-S',
      image: '544f0add-626b-4e4f-8a96-79fa4414d99a',
      enable_ipv6: true
    }

    const response = await axios.post(API_URL, instanceData, { headers: HEADERS })
    const { id, name, volumes } = response.data.server
    console.log(response)
    const volumeId = volumes['0'].id
    const template = await Template.findByPk(projectData.id)
    if (!template) throw new Error('Template not found')

    const newInstance = await Instance.create(
      { id, name, volumeId },
      { id, name, volumeId }
    )
    await newInstance.setTemplate(template.id)
    newInstance.save()

    if (sendFiles) {
      await uploadProjectFilesToInstance(newInstance.id, projectData)
    }
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
  instanceId, projectFiles
) => {
  const formData = new FormData()

  Object.keys(projectFiles).forEach((file) => {
    formData.append('files', file)
  })

  try {
    const response = await axios.patch(
      `${API_URL}/${instanceId}/user_data/${SSH_KEY_ID}`,
      formData,
      {
        headers: {
          ...HEADERS,
          'Content-Type': 'text/plain'
        }
      }
    )

    console.log('Files uploaded to instance: ', response.data)
  } catch (error) {
    console.error(
      'Error uploading files to instance. ',
      error
    )
  }
}

const updateInstance = async (req, res) => {
  try {
    const { instanceData, instanceId } = req.body
    const response = await axios.patch(API_URL, instanceData, { headers: HEADERS })
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
