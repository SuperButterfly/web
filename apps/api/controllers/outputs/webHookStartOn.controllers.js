const startonApi = require('../../services/smartContractAxiosInstance')

async function getWebhookSigningSecret(req, res, next) {
  const url = '/v3/webhook/'

  try {
    const response = await startonApi.get(url)
    console.log('Respuesta:', response.status, response.data)
    res.json(response.data) // Retorna los datos recibidos
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    next(error) // Lanza el error para que sea manejado por el middleware de error
  }
}

async function getAllWebhooks(req, res, next) {
  const url = '/v3/webhook'
  const { queryParameters } = req.query

  try {
    const response = await startonApi.get(url, {
      params: queryParameters
    })
    console.log('Respuesta:', response.status, response.data)
    res.json(response.data) // Retorna los datos recibidos
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    next(error) // Lanza el error para que sea manejado por el middleware de error
  }
}

async function getWebhookById(req, res, next) {
  const { id } = req.params
  const url = `/v3/webhook/${id}`

  try {
    const response = await startonApi.get(url)
    console.log('Respuesta:', response.status, response.data)
    res.json(response.data) // Retorna los datos recibidos
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    next(error) // Lanza el error para que sea manejado por el middleware de error
  }
}

module.exports = { getWebhookSigningSecret, getAllWebhooks, getWebhookById }
