const axios = require('axios')
const { Instance } = require('../../database.js')
const { API_URL, VOLUME_URL, HEADERS } = require('../../utils/consts.js')
const { sendRequest } = require('../../services/scaleway.js')
const { formatInstanceTypes } = require('../../utils/formatInstanceTypes.js')

const getOneInstance = async (req, res) => {
  try {
    const { idInstance } = req.params

    const instance = await Instance.findOne({
      where: {
        instanceId: idInstance
      }
    })
    if (!instance) throw new Error("The project doesn't have an instance")

    res.status(200).json({ instance, success: true })
  } catch (error) {
    res.status(500).json({ error: 'Unexpected error', message: error.message })
  }
}

const deleteInstance = async (req, res) => {
  try {
    const { idInstance } = req.params

    const instanceToDelete = await Instance.findByPk(idInstance)
    if (!instanceToDelete) throw new Error('Instance not found.')

    const instanceResponse = await axios.delete(`${API_URL}/${idInstance}`, {
      headers: HEADERS
    })
    const volumeResponse = await axios.delete(
      `${VOLUME_URL}/${instanceToDelete.volumeId}`,
      { headers: HEADERS }
    )
    console.log(volumeResponse.data)
    console.log(instanceResponse.data)

    await instanceToDelete.destroy()

    res
      .status(200)
      .json({ message: 'Instance and volume deleted', success: true })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

const getInstancesType = async (req, res) => {
  try {
    const { servers } = await sendRequest('GET', '/products/servers')
    const formatResponse = formatInstanceTypes(servers)
    res.status(200).json(formatResponse)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = { getOneInstance, deleteInstance, getInstancesType }
