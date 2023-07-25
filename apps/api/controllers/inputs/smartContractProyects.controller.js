const startonApi = require('../../services/smartContractAxiosInstance')

async function createProject(req, res, next) {
  const { projectData } = req.body

  try {
    const url = '/v3/project'
    const response = await startonApi.post(url, projectData)
    console.log('Respuesta:', response.status, response.data)
    res.json(response.data)
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    next(error)
  }
}

async function updateProject(req, res, next) {
  const projectId = req.params.id
  const { projectData } = req.body

  try {
    const url = `/v3/project/${projectId}`
    const response = await startonApi.patch(url, projectData)
    console.log('Respuesta:', response.status, response.data)
    res.json(response.data)
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    next(error)
  }
}

async function deleteProjectById(req, res, next) {
  const projectId = req.params.id

  try {
    const url = `/v3/project/${projectId}`
    const response = await startonApi.delete(url)
    console.log('Respuesta:', response.status, response.data)
    res.sendStatus(204) // Indica éxito sin contenido
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    next(error)
  }
}

module.exports = { createProject, updateProject, deleteProjectById }
