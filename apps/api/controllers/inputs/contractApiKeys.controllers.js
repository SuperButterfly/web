const axios = require('axios')

// AUTHENTICATING TO THE API USING YOUR API KEY
const startonApi = axios.create({
  baseURL: 'https://api.starton.com',
  headers: {
    'x-api-key': 'sk_live_4a92ea22-e4a8-43da-bae9-e8ef444165bc'
  }
})

// Función para crear una nueva API key
async function createApiKey(apiKeyData) {
  const url = '/v3/api-key'

  try {
    const response = await startonApi.post(url, apiKeyData)
    console.log('Respuesta:', response.status, response.data)
    // Aquí puedes manejar la respuesta si es necesario
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    // Aquí puedes manejar el error si ocurre
  }
  // Datos de la nueva API key en formato JSON ejemplo de objeto para enviar en la request
  // const newApiKeyData = {
  //   name: "Nombre de la nueva API key",
  //   description: "Descripción de la nueva API key",
  //   scope: {} // Puedes proporcionar un objeto vacío o agregar propiedades específicas según los permisos necesarios
  // };
}

// Función para eliminar una API key por su ID
async function deleteApiKeyById(id) {
  const url = `/v3/api-key/`

  try {
    const response = await startonApi.delete(url)
    console.log('Respuesta:', response.status, response.data)
    // Aquí puedes manejar la respuesta si es necesario
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    // Aquí puedes manejar el error si ocurre
  }
}

module.exports = { createApiKey, deleteApiKeyById }
