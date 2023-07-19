const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const addPage = async (req, res, next) => {
  const { body } = req

  const newPage = await models.PageModel.create(body)

  if (!newPage) throw new ClientError('Error to create page', 400)

  response(res, 200, newPage)
}

module.exports = { addPage: catchedAsync(addPage) }
