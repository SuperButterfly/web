const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const patchProject = async (req, res, next) => {
  const { id } = req.params
  const body = req.body

  const project = await models.ProjectModel.findOne({ where: { id: id } })

  if (!project) throw new ClientError('Project not found', 404)

  await project.update(body)

  const projectUpdated = await models.ProjectModel.findOne({
    where: { id: id }
  })

  response(res, 200, projectUpdated)
}

module.exports = { patchProject: catchedAsync(patchProject) }
