const startonApi = require('../../services/smartContractAxiosInstance')

// Función para obtener la lista de todos los proyectos existentes
async function getAllProjects(req, res, next) {
  const { page, limit } = req.query
  const url = '/v3/project'

  // Parámetros de consulta (query parameters) para la solicitud GET
  const params = {
    page, // Índice de la página desde el resultado
    limit // Máximo número de elementos a devolver (<= 100)
  }

  try {
    const response = await startonApi.get(url, { params })
    console.log('Respuesta:', response.status, response.data)
    res.json(response.data) // Retorna la lista de proyectos
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 400) {
      next(new Error('Solicitud incorrecta.'))
    } else {
      next(error) // Lanza el error para que sea manejado por el middleware de error
    }
  }
}

// Función para obtener un proyecto específico por su ID
async function getProjectById(req, res, next) {
  const { id } = req.params
  const url = `/v3/project/${id}`

  try {
    const response = await startonApi.get(url)
    console.log('Respuesta:', response.status, response.data)
    res.json(response.data) // Retorna los datos del proyecto encontrado
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 404) {
      next(new Error('Proyecto no encontrado.'))
    } else {
      next(error) // Lanza el error para que sea manejado por el middleware de error
    }
  }
}

module.exports = { getProjectById, getAllProjects }
