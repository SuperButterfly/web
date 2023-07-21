const startonApi = require('../../services/smartContractAxiosInstance')

// Función para obtener la lista de todas las API Keys existentes
async function getAllApiKeys(name) {
  const url = '/v3'

  // Parámetros de consulta (query parameters) para filtrar por nombre si se proporciona
  const params = name ? { name } : {}

  try {
    const response = await startonApi.get(url, { params })
    console.log('Respuesta:', response.status, response.data)
    // Aquí puedes manejar la respuesta si es necesario
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    // Aquí puedes manejar el error si ocurre
  }
}

module.exports = { getAllApiKeys }
