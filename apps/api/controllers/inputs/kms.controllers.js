const startonApi = require('../../services/smartContractAxiosInstance')

async function createKMS(name, metadata, credentials) {
  const url = '/v3/kms'

  const payload = {
    name,
    metadata,
    credentials,
    provider: 'AWS'
  }

  try {
    const response = await startonApi.post(url, payload)
    console.log('Respuesta:', response.status, response.data)
    return response.data
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 401) {
      throw new Error('No autenticado.')
    } else {
      throw error
    }
  }
}

async function updateKMSById(id, name, metadata, credentials) {
  const url = `/v3/kms/${id}`

  const payload = {
    name,
    metadata,
    credentials,
    provider: 'AWS'
  }

  try {
    const response = await startonApi.patch(url, payload)
    console.log('Respuesta:', response.status, response.data)
    return response.data
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 401) {
      throw new Error('No autenticado.')
    } else if (error.response.status === 404) {
      throw new Error('KMS no encontrado.')
    } else {
      throw error
    }
  }
}

async function deleteKMSById(id) {
  const url = `/v3/kms/${id}`

  try {
    const response = await startonApi.delete(url)
    console.log('Respuesta:', response.status)
    return response.status
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 401) {
      throw new Error('No autenticado.')
    } else if (error.response.status === 404) {
      throw new Error('KMS no encontrado.')
    } else {
      throw error
    }
  }
}

async function createWallet(description, name, metadata, kmsId) {
  const url = '/v3/kms/wallet'

  const payload = {
    description,
    name,
    metadata,
    kmsId
  }

  try {
    const response = await startonApi.post(url, payload)
    console.log('Respuesta:', response.status, response.data)
    return response.data
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 401) {
      throw new Error('No autenticado.')
    } else {
      throw error
    }
  }
}

async function updateWalletByAddress(address, description, name, metadata) {
  const url = `/v3/kms/wallet/${address}`

  const payload = {
    description,
    name,
    metadata
  }

  try {
    const response = await startonApi.patch(url, payload)
    console.log('Respuesta:', response.status, response.data)
    return response.data
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 401) {
      throw new Error('No autenticado.')
    } else if (error.response.status === 404) {
      throw new Error('Wallet no encontrada.')
    } else {
      throw error
    }
  }
}

async function deleteWalletByAddress(address, deleteKeyOnKms) {
  const url = `/v3/kms/wallet/${address}`

  const params = {
    deleteKeyOnKms
  }

  try {
    const response = await startonApi.delete(url, { params })
    console.log('Respuesta:', response.status)
    return response.status
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 401) {
      throw new Error('No autenticado.')
    } else if (error.response.status === 404) {
      throw new Error('Wallet no encontrada.')
    } else {
      throw error
    }
  }
}

module.exports = {
  deleteWalletByAddress,
  createKMS,
  updateKMSById,
  deleteKMSById,
  createWallet,
  updateWalletByAddress
}
