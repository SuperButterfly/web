const startonApi = require('../../services/smartContractAxiosInstance')

// Función para crear una nueva API key
async function createApiKey(req, res, next) {
  try {
    const apiKeyData = req.body
    const url = '/v3' // Reemplaza la URL adecuada para la creación de la API key

    const response = await startonApi.post(url, apiKeyData)
    console.log('Respuesta:', response.status, response.data)
    // Aquí puedes manejar la respuesta si es necesario
    res.status(201).json(response.data) // Enviar un estado de éxito y la respuesta
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    // Aquí puedes manejar el error si ocurre
    next(error) // Pasar el error al siguiente middleware para su manejo
  }
}

// Función para eliminar una API key por su nombre
async function deleteApiKeyById(req, res, next) {
  try {
    const name = req.params.name
    const url = `/v3/${name}` // Reemplaza la URL adecuada para la eliminación de la API key

    const response = await startonApi.delete(url)
    console.log('Respuesta:', response.status, response.data)
    // Aquí puedes manejar la respuesta si es necesario
    res.sendStatus(200) // Enviar un estado de éxito
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    // Aquí puedes manejar el error si ocurre
    next(error) // Pasar el error al siguiente middleware para su manejo
  }
}

module.exports = { createApiKey, deleteApiKeyById }
