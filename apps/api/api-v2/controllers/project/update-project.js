const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const updateProject = async (req, res, next) => {
  const { id } = req.params
  const body = req.body

  const project = await models.ProjectModel.findOne({ where: { id } })

  if (!project) throw new ClientError('Project not found', 404)

  await project.update(body)

  await project.save()

  response(res, 200, project)
}

module.exports = { updateProject: catchedAsync(updateProject) }
