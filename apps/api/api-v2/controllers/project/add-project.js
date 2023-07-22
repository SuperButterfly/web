const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const addProject = async (req, res, next) => {
  const { name, workSpaceId, userToolId, role } = req.body

  const workspace = await models.WorkSpaceModel.findByPk(workSpaceId)

  if (!workspace) throw new ClientError('Error not found workspace', 400)

  const user = await models.UserModel.findByPk(userToolId)

  if (!user) {
    throw new ClientError('Error not found user', 400)
  }

  const newProject = await models.ProjectModel.create({ name, workSpaceId })

  await models.UserProjectModel.create({
    userId: user.id,
    projectId: newProject.id,
    role
  })

  response(res, 200, newProject)
}

module.exports = { addProject: catchedAsync(addProject) }
