const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getIdPreset = async (req, res, next) => {
  const { id } = req.params

  const preset = await models.PresetModel.findOne({ where: { id } })

  if (!preset) throw new ClientError('Failed to find preset by ID', 404)

  const colorFinded = await models.ColorModel.findAll({
    where: { presetId: id }
  })

  if (!colorFinded) throw new ClientError('Failed to find color by ID', 404)

  const textFinded = await models.TextModel.findAll({
    where: { presetId: id }
  })

  if (!textFinded) throw new ClientError('Failed to find text by ID', 404)

  const layaoutFinded = await models.LayaoutModel.findAll({
    where: { presetId: id }
  })

  if (!layaoutFinded) throw new ClientError('Failed to find layaout by ID', 404)

  const presetData = {
    name: preset.name,
    color: colorFinded.map((color) => ({
      id: color.id,
      name: color.name,
      value: color.value,
      isDeleted: color.isDeleted
    })),
    text: textFinded.map((text) => ({
      id: text.id,
      name: text.name,
      size: text.size,
      weigth: text.weigth,
      fontFamily: text.fontFamily,
      isBold: text.isBold,
      isItalic: text.isItalic,
      haveUnderline: text.haveUnderline,
      haveMidline: text.haveMidline,
      isDeleted: text.isDeleted
    })),
    layaout: layaoutFinded.map((layaout) => ({
      id: layaout.id,
      name: layaout.name,
      value: layaout.value,
      isDeleted: layaout.isDeleted
    })),
    isDeleted: preset.isDeleted
  }

  response(res, 200, presetData)
}

module.exports = { getIdPreset: catchedAsync(getIdPreset) }
