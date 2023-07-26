const startonApi = require('../../services/smartContractAxiosInstance')

async function getSmartContractsForNetwork(req, res, next) {
  const { network, address, includeAbi, includeCompilationDetails } = req.params
  const url = '/v3/smart-contract'

  try {
    const response = await startonApi.get(url, {
      params: {
        network,
        address,
        includeAbi,
        includeCompilationDetails
      }
    })
    console.log('Respuesta:', response.status, response.data)
    res.json(response.data) // Retorna los contratos inteligentes para la red especificada
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

async function getAllSmartContracts(req, res, next) {
  const { network, address, includeAbi, includeCompilationDetails } = req.params
  const url = '/v3/smart-contract'

  try {
    const response = await startonApi.get(url, {
      params: {
        address,
        includeAbi,
        includeCompilationDetails
      }
    })
    console.log('Respuesta:', response.status, response.data)
    res.json(response.data) // Retorna todos los contratos inteligentes
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

async function getSmartContractByAddress(req, res, next) {
  const { network, address, includeAbi, includeCompilationDetails } = req.params
  const url = '/v3/smart-contract'

  try {
    const response = await startonApi.get(url, {
      params: {
        network,
        includeAbi,
        includeCompilationDetails
      }
    })
    console.log('Respuesta:', response.status, response.data)
    res.json(response.data) // Retorna los datos del contrato inteligente encontrado
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 401) {
      next(new Error('No autenticado.'))
    } else if (error.response.status === 404) {
      next(new Error('Contrato inteligente no encontrado.'))
    } else {
      next(error) // Lanza el error para que sea manejado por el middleware de error
    }
  }
}

module.exports = {
  getSmartContractsForNetwork,
  getAllSmartContracts,
  getSmartContractByAddress
}
