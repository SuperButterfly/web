const startonApi = require('../../services/smartContractAxiosInstance')

async function getAllKMS(req, res, next) {
  const url = '/v3/kms'

  try {
    const response = await startonApi.get(url)
    console.log('Respuesta:', response.status, response.data)
    res.json(response.data)
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 401) {
      next(new Error('No autenticado.'))
    } else {
      next(error)
    }
  }
}

async function getKMSById(req, res, next) {
  const { id } = req.params
  const url = `/v3/kms/${id}`

  try {
    const response = await startonApi.get(url)
    console.log('Respuesta:', response.status, response.data)
    res.json(response.data)
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 401) {
      next(new Error('No autenticado.'))
    } else if (error.response.status === 404) {
      next(new Error('KMS no encontrado.'))
    } else {
      next(error)
    }
  }
}

async function getWallets(req, res, next) {
  const url = '/v3/kms/wallet'
  const { name, isExternal } = req.query
  const params = { name, isExternal }

  try {
    const response = await startonApi.get(url, { params })
    console.log('Respuesta:', response.status, response.data)
    res.json(response.data)
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 401) {
      next(new Error('No autenticado.'))
    } else {
      next(error)
    }
  }
}

async function getWalletByAddress(req, res, next) {
  const { address } = req.params
  const url = `/v3/kms/wallet/${address}`

  try {
    const response = await startonApi.get(url)
    console.log('Respuesta:', response.status, response.data)
    res.json(response.data)
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 401) {
      next(new Error('No autenticado.'))
    } else if (error.response.status === 404) {
      next(new Error('Wallet no encontrada.'))
    } else {
      next(error)
    }
  }
}

module.exports = {
  getAllKMS,
  getKMSById,
  getWallets,
  getWalletByAddress
}
