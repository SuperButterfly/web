const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

/**
 * Funcion que settea un usuario a un workshop con un role determinado
 * @param {*} req userToolId, projectId, role
 * @param {*} res project
 * 
 */
const setUserToWorkSpace = async (req, res, next) => {
    const { userToolId, workSpaceId, role } = req.body

    const user = await models.UserModel.findByPk(userToolId)

    if (!user) throw new ClientError('Error not found user', 400)
    const workspace = await models.WorkSpaceModel.findByPk(workSpaceId)
    if (!workspace) throw new ClientError('Error not found workspace', 400)   
    await models.UserWorkSpaceModel.create({
        userId: user.id,
        workSpaceId: workspace.id,
        role
    })
  response(res, 200, workspace)
}

module.exports = { setUserToWorkSpace: catchedAsync(setUserToWorkSpace) }