const startonApi = require('../../services/smartContractAxiosInstance')

async function createApiKey(req, res, next) {
  try {
    const { apiKeyData } = req.body
    const url = '/v3' // Reemplaza la URL adecuada para la creación de la API key

    const response = await startonApi.post(url, apiKeyData)
    console.log('Respuesta:', response.status, response.data)
    // Aquí puedes manejar la respuesta si es necesario
    res.status(201).json(response.data) // Enviar un estado de éxito y la respuesta
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    // Aquí puedes manejar el error si ocurre
    if (error.response.status === 401) {
      res.status(401).json('No autenticado.')
    } else if (error.response.status === 403) {
      res.status(403).json('Acceso prohibido.')
    } else if (error.response.status === 409) {
      res.status(409).json('Conflicto al procesar la solicitud.')
    } else {
      res.status(500).json('Error interno del servidor.')
    }
  }
}

async function deleteApiKeyById(req, res, next) {
  try {
    const { name } = req.params
    const url = `/v3/${name}` // Reemplaza la URL adecuada para la eliminación de la API key

    const response = await startonApi.delete(url)
    console.log('Respuesta:', response.status, response.data)
    // Aquí puedes manejar la respuesta si es necesario
    res.sendStatus(200) // Enviar un estado de éxito
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    // Aquí puedes manejar el error si ocurre
    if (error.response.status === 401) {
      res.status(401).json('No autenticado.')
    } else if (error.response.status === 404) {
      res.status(404).json('No encontrado.')
    } else {
      res.status(500).json('Error interno del servidor.')
    }
  }
}

module.exports = { createApiKey, deleteApiKeyById }
