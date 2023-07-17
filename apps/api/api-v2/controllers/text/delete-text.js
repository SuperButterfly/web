const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const deleteText = async (req, res, next) => {
  const { id } = req.params

  const text = await models.TextModel.findOne({ where: { id: id } })

  if (!text) throw new ClientError('Text not found', 404)

  await text.update({ isDeleted: true })

  const textDisable = await models.TextModel.findOne({
    where: { id: id }
  })

  response(res, 200, textDisable)
}

module.exports = { deleteText: catchedAsync(deleteText) }
