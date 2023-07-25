const startonApi = require('../../services/smartContractAxiosInstance')

async function getAllWatchers(req, res, next) {
  const url = '/v3/watcher'
  const {
    page,
    limit,
    address,
    network,
    type,
    webhookUrl,
    confirmationsBlocks
  } = req.query

  // Parámetros de consulta (query parameters) para la solicitud GET
  const params = {
    page, // Índice de la página desde el resultado
    limit, // Máximo número de elementos a devolver (<= 100)
    address, // La dirección del contrato inteligente
    network, // Red en la que están implementados los watchers
    type, // Tipo de eventos observados
    webhookUrl, // URL del webhook
    confirmationsBlocks // Número de bloques de confirmación
  }

  try {
    const response = await startonApi.get(url, { params })
    console.log('Respuesta:', response.status, response.data)
    res.json(response.data) // Retorna los datos recibidos de todos los watchers
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    next(error) // Lanza el error para que sea manejado por el middleware de error
  }
}

async function getWatcherById(req, res, next) {
  const { id } = req.params
  const url = `/v3/watcher/${id}`

  try {
    const response = await startonApi.get(url)
    console.log('Respuesta:', response.status, response.data)
    res.json(response.data) // Retorna los datos recibidos del watcher específico
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    next(error) // Lanza el error para que sea manejado por el middleware de error
  }
}

async function getWatcherEvents(req, res, next) {
  const { id } = req.params
  const { page, limit } = req.query
  const url = `/v3/watcher/${id}/event`

  // Parámetros de consulta (query parameters) para la solicitud GET
  const params = {
    page, // Índice de la página desde el resultado
    limit // Máximo número de elementos a devolver (<= 100)
  }

  try {
    const response = await startonApi.get(url, { params })
    console.log('Respuesta:', response.status, response.data)
    res.json(response.data) // Retorna los datos recibidos de todos los eventos del watcher específico
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    next(error) // Lanza el error para que sea manejado por el middleware de error
  }
}

async function getEventForWatcher(req, res, next) {
  const { id, eventId } = req.params
  const url = `/v3/watcher/${id}/event/${eventId}`

  try {
    const response = await startonApi.get(url)
    console.log('Respuesta:', response.status, response.data)
    res.json(response.data) // Retorna los datos del evento específico del watcher
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    next(error) // Lanza el error para que sea manejado por el middleware de error
  }
}

module.exports = {
  getAllWatchers,
  getWatcherById,
  getWatcherEvents,
  getEventForWatcher
}
