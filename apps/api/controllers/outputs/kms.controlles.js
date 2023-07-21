const startonApi = require('../../services/smartContractAxiosInstance')

async function getAllKMS() {
  const url = '/v3/kms'

  try {
    const response = await startonApi.get(url)
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

async function getKMSById(id) {
  const url = `/v3/kms/${id}`

  try {
    const response = await startonApi.get(url)
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

async function getWallets(name, isExternal) {
  const url = '/v3/kms/wallet'

  const params = {
    name,
    isExternal
  }

  try {
    const response = await startonApi.get(url, { params })
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


async function getWalletByAddress(address) {
    const url = `/v3/kms/wallet/${address}`;
  
    try {
      const response = await startonApi.get(url);
      console.log('Respuesta:', response.status, response.data);
      return response.data;
    } catch (error) {
      console.error('Error:', error.response.status, error.response.data);
      if (error.response.status === 401) {
        throw new Error('No autenticado.');
      } else if (error.response.status === 404) {
        throw new Error('Wallet no encontrada.');
      } else {
        throw error;
      }
    }
  }
  

module.exports = { getAllKMS, getKMSById, getWallets, getWalletByAddress }
