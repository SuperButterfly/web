const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const updateText = async (req, res, next) => {
  const { id } = req.params
  const { name, size, weigth, fontFamily, isBold, isItalic, haveUnderline, haveMidline } = req.body

  const text = await models.TextModel.findOne({ where: { id } })

  if (!text) throw new ClientError('Text not found', 404)

  await text.update({ name, size, weigth, fontFamily, isBold, isItalic, haveUnderline, haveMidline })

  await text.save()

  response(res, 200, text)
}

module.exports = { updateText: catchedAsync(updateText) }
