const startonApi = require('../../services/smartContractAxiosInstance')

async function handleSmartContractRequest(req, res, next) {
  const { network, address } = req.params
  const contractData = req.body
  let url

  if (req.path.includes('/from-bytecode')) {
    url = '/v3'
  } else if (req.path.includes('/from-template')) {
    url = '/v3'
  } else if (req.path.includes('/call')) {
    url = '/v3'
  } else if (req.path.includes('/read')) {
    url = '/v3'
  } else if (req.path.includes('/import-existing')) {
    url = '/v3'
  } else {
    // Invalid path
    return res.sendStatus(404)
  }

  try {
    const response = await startonApi.post(url, contractData)
    console.log('Respuesta:', response.status, response.data)
    res.json(response.data)
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 400) {
      next(new Error('Solicitud incorrecta.'))
    } else if (error.response.status === 401) {
      next(new Error('No autenticado.'))
    } else if (error.response.status === 404) {
      next(new Error('No encontrado.'))
    } else if (error.response.status === 422) {
      next(new Error('Transacción de reemplazo está subcotizada.'))
    } else if (error.response.status === 500) {
      next(new Error('Error desconocido del servidor.'))
    } else {
      next(error)
    }
  }
}

module.exports = { handleSmartContractRequest }
