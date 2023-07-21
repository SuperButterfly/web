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
    presetId,
    ProjectId
  } = req.body

  const preset = await models.PresetModel.findByPk(presetId)

  if (!preset) throw new ClientError('Error not found preset', 400)

  const project = await models.ProjectModel.findByPk(ProjectId)

  if (!project) throw new ClientError('Error not found project', 400)

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
