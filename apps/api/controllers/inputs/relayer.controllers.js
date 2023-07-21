const startonApi = require('../../services/smartContractAxiosInstance')

async function updateRelayerSettingsForProject(network, settings) {
  const url = `/v3`

  try {
    const response = await startonApi.patch(url, settings)
    console.log('Respuesta:', response.status, response.data)
    return response.data // Retorna las configuraciones actualizadas del Relayer para el proyecto y red específicos
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 401) {
      throw new Error('No autenticado.')
    } else {
      throw error // Lanza el error para que sea manejado por el llamador de la función
    }
  }
}

module.exports = { updateRelayerSettingsForProject }
