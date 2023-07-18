const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const patchText = async (req, res, next) => {
  const { id } = req.params
  const body = req.body

  const text = await models.TextModel.findOne({ where: { id: id } })

  if (!text) throw new ClientError('Text not found', 404)

  await text.update(body, { fields: Object.keys(body) })

  await text.save()

  response(res, 200, text)
}

module.exports = { patchText: catchedAsync(patchText) }
