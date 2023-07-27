const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getAllPage = async (req, res, next) => {
  const { id } = req.params

  const project = await models.ProjectModel.findByPk(id)

  if (!project) throw new ClientError('Error project not found', 404)

  const allPages = await models.PageModel.findAll({
    where: { projectId: id }
  })
  console.log(allPages)
  if (!allPages.length) throw new ClientError('Error fetching the pages', 404)

  response(res, 200, allPages)
}

module.exports = { getAllPage: catchedAsync(getAllPage) }
