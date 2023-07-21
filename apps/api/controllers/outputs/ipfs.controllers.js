const startonApi = require('../../services/smartContractAxiosInstance')

// Middleware para obtener todos los archivos fijados en Starton IPFS
async function getAllPinnedFiles(req, res, next) {
  const { cid, name, status, includeDirectoryContent } = req.query
  const url = '/v3/ipfs/pin'

  try {
    const response = await startonApi.get(url, { params: req.query })
    console.log('Respuesta:', response.status, response.data)
    res.json(response.data)
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 400) {
      next(new Error('x-project-id required.'))
    } else if (error.response.status === 401) {
      next(new Error('Not authenticated.'))
    } else {
      next(error)
    }
  }
}

// Middleware para obtener el archivo fijado por {id}
async function getPinnedFileById(req, res, next) {
  const { id } = req.params
  const { includeDirectoryContent } = req.query
  const url = `/v3/ipfs/pin/${id}`

  try {
    const response = await startonApi.get(url, { params: req.query })
    console.log('Respuesta:', response.status, response.data)
    res.json(response.data)
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 401) {
      next(new Error('Not authenticated.'))
    } else if (error.response.status === 404) {
      next(new Error('Not found.'))
    } else {
      next(error)
    }
  }
}

async function getStorageUsed(req, res, next) {
  const url = '/v3/ipfs/storage-used'

  try {
    const response = await startonApi.get(url)
    console.log('Respuesta:', response.status, response.data)
    res.json(response.data)
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 400) {
      next(new Error('x-project-id required.'))
    } else if (error.response.status === 401) {
      next(new Error('Not authenticated.'))
    } else {
      next(error)
    }
  }
}

module.exports = {
  getAllPinnedFiles,
  getPinnedFileById,
  getStorageUsed
}
