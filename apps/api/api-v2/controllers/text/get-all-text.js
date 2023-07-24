const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getAllText = async (req, res, next) => {
  const allText = await models.TextModel.findAll()

  if (!allText) throw new ClientError('Error fetching the texts', 404)

  response(res, 200, allText)
}

module.exports = { getAllText: catchedAsync(getAllText) }
