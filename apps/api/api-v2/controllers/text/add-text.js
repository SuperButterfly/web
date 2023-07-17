const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const addText = async (req, res, next) => {
  const body = req.body

  const newText = await models.TextModel.create(body)

  if (!newText) throw new ClientError('Error to create text', 400)

  response(res, 200, newText)
}

module.exports = { addText: catchedAsync(addText) }
