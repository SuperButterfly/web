const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getIdText = async (req, res, next) => {
  const { id } = req.params

  const text = await models.TextModel.findByPk(id)

  if (!text) throw new ClientError('Failed to find text by ID', 404)

  response(res, 200, text)
}

module.exports = { getIdText: catchedAsync(getIdText) }
