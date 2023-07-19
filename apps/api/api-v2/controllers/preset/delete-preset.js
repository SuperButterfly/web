const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const deletePreset = async (req, res, next) => {
  const { id } = req.params

  const preset = await models.PresetModel.findOne({ where: { id } })

  if (!preset) throw new ClientError('Preset not found', 404)

  await preset.update({ isDeleted: true })

  await preset.save()

  response(res, 200, preset)
}

module.exports = { deletePreset: catchedAsync(deletePreset) }
