const startonApi = require('../../services/smartContractAxiosInstance')

async function getSmartContractsForNetwork(
  network,
  address,
  includeAbi,
  includeCompilationDetails
) {
  const url = `/v3/smart-contract`

  try {
    const response = await startonApi.get(url, {
      params: {
        address,
        includeAbi,
        includeCompilationDetails
      }
    })
    console.log('Respuesta:', response.status, response.data)
    return response.data // Retorna los contratos inteligentes para la red especificada
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 400) {
      throw new Error('Solicitud incorrecta.')
    } else if (error.response.status === 401) {
      throw new Error('No autenticado.')
    } else {
      throw error // Lanza el error para que sea manejado por el llamador de la función
    }
  }
}

async function getAllSmartContracts(
  network,
  address,
  includeAbi,
  includeCompilationDetails
) {
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
    return response.data // Retorna todos los contratos inteligentes
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 400) {
      throw new Error('Solicitud incorrecta.')
    } else if (error.response.status === 401) {
      throw new Error('No autenticado.')
    } else {
      throw error // Lanza el error para que sea manejado por el llamador de la función
    }
  }
}

async function getSmartContractByAddress(
  network,
  address,
  includeAbi,
  includeCompilationDetails
) {
  const url = `/v3/smart-contract`

  try {
    const response = await startonApi.get(url, {
      params: {
        includeAbi,
        includeCompilationDetails
      }
    })
    console.log('Respuesta:', response.status, response.data)
    return response.data // Retorna los datos del contrato inteligente encontrado
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 401) {
      throw new Error('No autenticado.')
    } else if (error.response.status === 404) {
      throw new Error('Contrato inteligente no encontrado.')
    } else {
      throw error // Lanza el error para que sea manejado por el llamador de la función
    }
  }
}

module.exports = {
  getSmartContractsForNetwork,
  getAllSmartContracts,
  getSmartContractByAddress
}
