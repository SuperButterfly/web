const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

/**
 * Funcion que settea un usuario a un proyecto con un role determinado
 * @param {*} req userToolId, projectId, role
 * @param {*} res project
 * 
 */
const setUserToProject = async (req, res, next) => {
    const { userToolId, projectId, role } = req.body
    const user = await models.UserModel.findByPk(userToolId)
    if (!user) throw new ClientError('Error not found user', 400)
    const project = await models.ProjectModel.findByPk(projectId)
    if (!project) throw new ClientError('Error not found project', 400)   
    await models.UserProjectModel.create({
        userId: user.id,
        projectId: project.id,
        role
    })
  response(res, 200, project)
}

module.exports = { setUserToProject: catchedAsync(setUserToProject) }