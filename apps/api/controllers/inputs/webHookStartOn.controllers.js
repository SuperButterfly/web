const startonApi = require('../../services/smartContractAxiosInstance')

async function createWatcher(req, res, next) {
  const url = '/v3/watcher'
  const {
    name,
    description,
    address,
    network,
    type,
    webhookUrl,
    confirmationsBlocks
  } = req.body

  const payload = {
    name,
    description,
    address,
    network,
    type,
    webhookUrl,
    confirmationsBlocks
  }

  try {
    const response = await startonApi.post(url, payload)
    console.log('Respuesta:', response.status, response.data)
    res.status(200).json(response.data)
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 401) {
      res.status(401).json(error.message)
    } else {
      res.status(500).json(error.message)
    }
  }
}

async function createWatcherOnManyNetworks(req, res, next) {
  const url = '/v3/watcher/'
  const {
    networks,
    name,
    description,
    address,
    type,
    webhookUrl,
    confirmationsBlocks
  } = req.body

  const payload = {
    networks,
    name,
    description,
    address,
    type,
    webhookUrl,
    confirmationsBlocks
  }

  try {
    const response = await startonApi.post(url, payload)
    console.log('Respuesta:', response.status, response.data)
    res.status(200).json(response.data)
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 401) {
      res.status(401).json(error.message)
    } else {
      res.status(500).json(error.message)
    }
  }
}

async function updateWatcher(req, res, next) {
  const { id } = req.params
  const url = '/v3/watcher/'
  const { paused, webhookUrl, confirmationsBlocks, name, description } =
    req.body

  const payload = {
    paused,
    webhookUrl,
    confirmationsBlocks,
    name,
    description
  }

  try {
    const response = await startonApi.patch(`${url}${id}`, payload)
    console.log('Respuesta:', response.status, response.data)
    res.status(200).json(response.data)
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 401) {
      res.status(401).json(error.message)
    } else {
      res.status(500).json(error.message)
    }
  }
}

async function deleteWatcherById(req, res, next) {
  const { id } = req.params
  const url = '/v3/watcher/'

  try {
    const response = await startonApi.delete(`${url}${id}`)
    console.log('Respuesta:', response.status, response.data)
    res.sendStatus(200) // Enviar un estado de éxito
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 401) {
      res.status(401).json(error.message)
    } else {
      res.status(500).json(error.message)
    }
  }
}

module.exports = {
  createWatcher,
  createWatcherOnManyNetworks,
  updateWatcher,
  deleteWatcherById
}
