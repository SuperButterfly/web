const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const updateProject = async (req, res, next) => {
  const { id } = req.params
  const body = req.body

  const project = await models.ProjectModel.findByPk(id)

  if (!project) throw new ClientError('Erro al encontrar el project', 400)

  await project.update(body)

  const projectUpdated = await models.ProjectModel.findByPk(id)

  response(res, 200, projectUpdated)
}

module.exports = { updateProject: catchedAsync(updateProject) }
