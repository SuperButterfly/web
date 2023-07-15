const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getAllProject = async (req, res, next) => {
  const allProjects = await models.ProjectModel.findAll()

  if (!allProjects) throw new ClientError('Erro al traer los projects', 400)

  response(res, 200, allProjects)
}

module.exports = { getAllProject: catchedAsync(getAllProject) }
