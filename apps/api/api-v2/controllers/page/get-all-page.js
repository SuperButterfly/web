const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getAllPage = async (req, res, next) => {
  const allPages = await models.PageModel.findAll()

  if (!allPages) throw new ClientError('Error fetching the pages', 404)

  response(res, 200, allPages)
}

module.exports = { getAllPage: catchedAsync(getAllPage) }
