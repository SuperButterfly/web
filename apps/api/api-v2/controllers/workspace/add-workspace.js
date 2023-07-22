const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const addWorkSpace = async (req, res, next) => {
  const { name, description, userToolId, role } = req.body

  const user = await models.UserModel.findByPk(userToolId)

  if (!user) {
    throw new ClientError('Error not found user', 400)
  }

  const workspace = await models.WorkSpaceModel.create({
    name,
    description
  })
  // se deja de forma provisoria este meotodo
  await models.UserWorkSpaceModel.create({
    userId: user.id,
    workSpaceId: workspace.id,
    role: role
  })
  response(res, 200, workspace)
}

module.exports = { addWorkSpace: catchedAsync(addWorkSpace) }
