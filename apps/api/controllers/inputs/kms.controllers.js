const startonApi = require('../../services/smartContractAxiosInstance')

async function createKMS(req, res, next) {
  const { name, metadata, credentials } = req.body
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
    res.status(201).json(response.data)
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 401) {
      next(new Error('No autenticado.'))
    } else {
      next(error)
    }
  }
}

async function updateKMSById(req, res, next) {
  const { id } = req.params
  const { name, metadata, credentials } = req.body
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
    res.status(200).json(response.data)
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

async function deleteKMSById(req, res, next) {
  const { id } = req.params
  const url = `/v3/kms/${id}`

  try {
    const response = await startonApi.delete(url)
    console.log('Respuesta:', response.status)
    res.sendStatus(200)
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

async function createWallet(req, res, next) {
  const { description, name, metadata, kmsId } = req.body
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
    res.status(201).json(response.data)
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 401) {
      next(new Error('No autenticado.'))
    } else {
      next(error)
    }
  }
}

async function updateWalletByAddress(req, res, next) {
  const { address } = req.params
  const { description, name, metadata } = req.body
  const url = `/v3/kms/wallet/${address}`

  const payload = {
    description,
    name,
    metadata
  }

  try {
    const response = await startonApi.patch(url, payload)
    console.log('Respuesta:', response.status, response.data)
    res.status(200).json(response.data)
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

async function deleteWalletByAddress(req, res, next) {
  const { address } = req.params
  const { deleteKeyOnKms } = req.query
  const url = `/v3/kms/wallet/${address}`

  const params = {
    deleteKeyOnKms
  }

  try {
    const response = await startonApi.delete(url, { params })
    console.log('Respuesta:', response.status)
    res.sendStatus(200)
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
  createKMS,
  updateKMSById,
  deleteKMSById,
  createWallet,
  updateWalletByAddress,
  deleteWalletByAddress
}
