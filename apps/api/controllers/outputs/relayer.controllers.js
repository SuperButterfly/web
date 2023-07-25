const startonApi = require('../../services/smartContractAxiosInstance')

async function getRelayerSettingsForProject(req, res, next) {
  const { network } = req.params
  const url = '/v3'

  try {
    const response = await startonApi.get(url)
    console.log('Respuesta:', response.status, response.data)
    res.json(response.data) // Retorna las configuraciones del Relayer para el proyecto y red específicos
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 401) {
      next(new Error('No autenticado.'))
    } else {
      next(error) // Lanza el error para que sea manejado por el middleware de error
    }
  }
}

module.exports = { getRelayerSettingsForProject }
