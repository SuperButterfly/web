const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getAllProjectByWorkSpace = async (req, res, next) => {
    const { id } = req.params

 
    const workspace = await models.WorkSpaceModel.findByPk(id, {
      include: [
        {
          model: models.ProjectModel,
          where: { isDeleted: false }, // Optionally, filter projects based on some criteria
        },
      ],
    })

    if (!workspace) {
      throw new ClientError('Workspace not found', 404)
    }

    const projects = workspace.Projects

    response(res, 200, projects)
}

module.exports = { getAllProjectByWorkSpace: catchedAsync(getAllProjectByWorkSpace) }