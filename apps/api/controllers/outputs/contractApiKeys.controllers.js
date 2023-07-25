const startonApi = require('../../services/smartContractAxiosInstance')

// Función para obtener la lista de todas las API Keys existentes
async function getAllApiKeys(req, res, next) {
  const url = '/v3'

  // Parámetros de consulta (query parameters) para filtrar por nombre si se proporciona
  const { name } = req.query
  const params = name ? { name } : {}

  try {
    const response = await startonApi.get(url, { params })
    console.log('Respuesta:', response.status, response.data)
    res.json(response.data)
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    next(error)
  }
}

module.exports = { getAllApiKeys }
