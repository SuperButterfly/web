const { Instance } = require('../../database.js')
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
    if (!instance) throw new Error('The project doesn\'t have an instance')

    res.status(200).json({ instance, success: true })
  } catch (error) {
    res.status(500).json({ error: 'Unexpected error', message: error.message })
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

module.exports = { getOneInstance, getInstancesType }
