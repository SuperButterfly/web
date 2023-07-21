const startonApi = require('../../services/smartContractAxiosInstance')

async function createSmartContractFromBytecode(contractData) {
  const url = '/v3'

  try {
    const response = await startonApi.post(url, contractData)
    console.log('Respuesta:', response.status, response.data)
    return response.data // Retorna los datos recibidos del nuevo contrato inteligente
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 400) {
      throw new Error('Solicitud incorrecta.')
    } else if (error.response.status === 401) {
      throw new Error('No autenticado.')
    } else if (error.response.status === 404) {
      throw new Error('No encontrado.')
    } else if (error.response.status === 422) {
      throw new Error('Transacción de reemplazo está subcotizada.')
    } else if (error.response.status === 500) {
      throw new Error('Error desconocido del servidor.')
    } else {
      throw error // Lanza el error para que sea manejado por el llamador de la función
    }
  }
}

async function createSmartContractFromTemplate(contractData) {
  const url = '/v3'

  try {
    const response = await startonApi.post(url, contractData)
    console.log('Respuesta:', response.status, response.data)
    return response.data // Retorna los datos recibidos del nuevo contrato inteligente
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 400) {
      throw new Error('Solicitud incorrecta.')
    } else if (error.response.status === 401) {
      throw new Error('No autenticado.')
    } else if (error.response.status === 404) {
      throw new Error('No encontrado.')
    } else if (error.response.status === 500) {
      throw new Error('Error desconocido del servidor.')
    } else {
      throw error // Lanza el error para que sea manejado por el llamador de la función
    }
  }
}

async function callSmartContract(network, address, contractData) {
  const url = `/v3`

  try {
    const response = await startonApi.post(url, contractData)
    console.log('Respuesta:', response.status, response.data)
    return response.data // Retorna los datos recibidos de la llamada al contrato inteligente
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 400) {
      throw new Error('Solicitud incorrecta.')
    } else if (error.response.status === 401) {
      throw new Error('No autenticado.')
    } else if (error.response.status === 404) {
      throw new Error('No encontrado.')
    } else if (error.response.status === 422) {
      throw new Error('Datos de la transacción incorrectos.')
    } else if (error.response.status === 500) {
      throw new Error('Error desconocido del servidor.')
    } else {
      throw error // Lanza el error para que sea manejado por el llamador de la función
    }
  }
}

async function readSmartContract(network, address, contractData) {
  const url = `/v3`

  try {
    const response = await startonApi.post(url, contractData)
    console.log('Respuesta:', response.status, response.data)
    return response.data // Retorna los datos recibidos de la lectura del contrato inteligente
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 400) {
      throw new Error('Solicitud incorrecta.')
    } else if (error.response.status === 404) {
      throw new Error('No encontrado.')
    } else if (error.response.status === 500) {
      throw new Error('Error desconocido del servidor.')
    } else {
      throw error // Lanza el error para que sea manejado por el llamador de la función
    }
  }
}

async function importExistingSmartContract(contractData) {
  const url = '/v3'

  try {
    const response = await startonApi.post(url, contractData)
    console.log('Respuesta:', response.status, response.data)
    return response.data // Retorna los datos del contrato importado exitosamente
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

module.exports = {
  createSmartContractFromBytecode,
  createSmartContractFromTemplate,
  callSmartContract,
  readSmartContract,
  importExistingSmartContract
}
