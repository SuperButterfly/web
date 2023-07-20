const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const addText = async (req, res, next) => {
  const {
    name,
    size,
    weigth,
    fontFamily,
    isBold,
    isItalic,
    haveUnderline,
    haveMidline,
    presetId
  } = req.body

  const newText = await models.TextModel.create({
    name,
    size,
    weigth,
    fontFamily,
    isBold,
    isItalic,
    haveUnderline,
    haveMidline,
    presetId
  })

  if (!newText) throw new ClientError('Error to create text', 400)

  response(res, 200, newText)
}

module.exports = { addText: catchedAsync(addText) }
