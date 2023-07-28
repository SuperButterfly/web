const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getAllWorkSpace = async (req, res, next) => {
  const { id } = req.params

  const workspaces = await models.UserWorkSpaceModel.findAll({
    where: { userId: id }
  })

  if (!workspaces) throw new ClientError('Error not found workspaces', 400)

  const workspaceDetails = await Promise.all(
    workspaces.map((workspace) =>
      models.WorkSpaceModel.findByPk(workspace.workSpaceId)
    )
  )

  if (!workspaceDetails)
    throw new ClientError('Error not found workspaces', 400)

  const usersDetails = []

  await Promise.all(
    workspaces.map(async (workspace) => {
      const userFinded = await models.UserModel.findByPk(workspace.userId)
      if (
        userFinded &&
        !usersDetails.some((user) => user.id === userFinded.id)
      ) {
        const userDefinite = {
          id: userFinded.id,
          userName: userFinded.userName,
          email: userFinded.email,
          plan: userFinded.plan,
          resourcesList: userFinded.resourcesList,
          theme: userFinded.theme,
          billingDates: userFinded.billingDates,
          isDeleted: userFinded.isDeleted
        }
        usersDetails.push(userDefinite)
      }
    })
  )

  response(res, 200, { workspaceDetails, usersDetails })
}

module.exports = { getAllWorkSpace: catchedAsync(getAllWorkSpace) }
