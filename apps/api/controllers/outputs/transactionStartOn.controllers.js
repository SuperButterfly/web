const startonApi = require('../../services/smartContractAxiosInstance')

async function getAllTransactions(req, res, next) {
  const url = '/v3/transaction'
  const { queryParameters } = req.query

  try {
    const response = await startonApi.get(url, {
      params: queryParameters
    })
    console.log('Respuesta:', response.status, response.data)
    res.json(response.data) // Retorna los datos recibidos de todas las transacciones
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 400) {
      next(new Error('Solicitud incorrecta.'))
    } else if (error.response.status === 401) {
      next(new Error('No autenticado.'))
    } else {
      next(error) // Lanza el error para que sea manejado por el middleware de error
    }
  }
}

async function getTransactionById(req, res, next) {
  const { id } = req.params
  const url = `/v3/transaction/${id}`

  try {
    const response = await startonApi.get(url)
    console.log('Respuesta:', response.status, response.data)
    res.json(response.data) // Retorna los datos recibidos de la transacción específica
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 404) {
      next(new Error('Transacción no encontrada.'))
    } else if (error.response.status === 401) {
      next(new Error('No autenticado.'))
    } else {
      next(error) // Lanza el error para que sea manejado por el middleware de error
    }
  }
}

module.exports = { getAllTransactions, getTransactionById }
