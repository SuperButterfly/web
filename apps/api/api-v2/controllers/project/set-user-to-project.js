const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const setUserToProject = async (req, res, next) => {
    const { userToolId, ProjectId, role } = req.body
    const user = await models.UserModel.findByPk(userToolId)
    if (!user) throw new ClientError('Error not found user', 400)
    const project = await models.ProjectModel.findByPk(ProjectId)
    if (!project) throw new ClientError('Error not found project', 400)   
    await models.UserProjectModel.create({
        userId: user.id,
        projectId: project.id,
        role
    })
  response(res, 200, project)
}

module.exports = { setUserToProject: catchedAsync(setUserToProject) }