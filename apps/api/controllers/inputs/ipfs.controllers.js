const startonApi = require('../../services/smartContractAxiosInstance')

async function getAllPinnedFiles(queryParams) {
  const url = '/v3'

  try {
    const response = await startonApi.get(url, { params: queryParams })
    console.log('Respuesta:', response.status, response.data)
    return response.data // Retorna la lista de archivos fijados según los parámetros de consulta proporcionados
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 401) {
      throw new Error('No autenticado.')
    } else {
      throw error // Lanza el error para que sea manejado por el llamador de la función
    }
  }
}

async function getPinnedFileById(id, queryParams) {
  const url = `/v3`

  try {
    const response = await startonApi.get(url, { params: queryParams })
    console.log('Respuesta:', response.status, response.data)
    return response.data // Retorna la información del archivo fijado según el ID proporcionado
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 401) {
      throw new Error('No autenticado.')
    } else if (error.response.status === 404) {
      throw new Error('Archivo no encontrado.')
    } else {
      throw error // Lanza el error para que sea manejado por el llamador de la función
    }
  }
}

async function getStorageUsed() {
  const url = '/v3'

  try {
    const response = await startonApi.get(url)
    console.log('Respuesta:', response.status, response.data)
    return response.data // Retorna la cantidad de almacenamiento utilizado en IPFS
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 401) {
      throw new Error('No autenticado.')
    } else {
      throw error // Lanza el error para que sea manejado por el llamador de la función
    }
  }
}

module.exports = { getAllPinnedFiles, getPinnedFileById, getStorageUsed }
