const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const deleteProject = async (req, res, next) => {
  const { id } = req.params

  const project = await models.ProjectModel.findOne({ where: { id: id } })

  if (!project) throw new ClientError('Project not found', 404)

  await project.update({ isDeleted: true })

  await project.save()

  response(res, 200, project)
}

module.exports = { deleteProject: catchedAsync(deleteProject) }
