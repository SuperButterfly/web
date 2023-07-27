const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getAllPage = async (req, res, next) => {
  const { projectId } = req.params

  const project = await models.ProjectModel.findByPK(projectId)

  if (!project) throw new ClientError('Error project not found', 404)

  const allPages = await models.PageModel.findAll({
    where: { projectId }
  })

  if (!allPages) throw new ClientError('Error fetching the pages', 404)

  response(res, 200, allPages)
}

module.exports = { getAllPage: catchedAsync(getAllPage) }
