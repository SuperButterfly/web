const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getIdPage = async (req, res, next) => {
  const { id } = req.params

  const page = await models.PageModel.findByPk(id)

  if (!page) throw new ClientError('Failed to find preset by ID', 404)

  response(res, 200, page)
}

module.exports = { getIdPage: catchedAsync(getIdPage) }
