const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const patchProject = async (req, res, next) => {
  const { id } = req.params
  const body = req.body

  const project = await models.ProjectModel.findOne({ where: { id: id } })

  if (!project) throw new ClientError('Project not found', 404)

  Object.assign(project, body)

  await project.save()

  response(res, 200, project)
}

module.exports = { patchProject: catchedAsync(patchProject) }
