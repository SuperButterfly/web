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

const getAvailableInstances = async (req, res) => {
  try {
    const { zone } = req.params

    const availability = await sendRequest(
      'GET',
      `/instance/v1/zones/${zone}/products/servers/availability`
    )

    const availableInstances = Object.entries(availability.servers)

    const format = availableInstances
      .filter(([key, value]) => value.availability === 'available')
      .map((type) => type[0])

    res.status(200).json(format)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const listImages = async (req, res) => {
  try {
    const { zone } = req.params
    const { images } = await sendRequest(
      'GET',
      `/instance/v1/zones/${zone}/images`
    )
    const formattedData = images
      .filter((image) => image.state === 'available')
      .map(({ id, name, arch }) => {
        const formattedName = `${name} architecture: ${arch}`
        return {
          id,
          name: formattedName
        }
      })

    res.status(200).json(formattedData)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getOneInstance,
  getInstancesType,
  getAvailableInstances,
  listImages
}
