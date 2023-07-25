const startonApi = require('../../services/smartContractAxiosInstance')

async function updateRelayerSettingsForProject(req, res, next) {
  const { network } = req.params
  const {settings} = req.body
  const url = '/v3'

  try {
    const response = await startonApi.patch(url, settings)
    console.log('Respuesta:', response.status, response.data)
    res.json(response.data) // Retorna las configuraciones actualizadas del Relayer para el proyecto y red específicos
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 401) {
      next(new Error('No autenticado.'))
    } else {
      next(error) // Lanza el error para que sea manejado por el middleware de error
    }
  }
}

module.exports = { updateRelayerSettingsForProject }
