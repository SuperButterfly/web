const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const updatePreset = async (req, res, next) => {
  const { id } = req.params
  const body = req.body

  const preset = await models.PresetModel.findOne({ where: { id: id } })

  if (!preset) throw new ClientError('Preset not found', 404)

  await preset.update(body)

  const presetUpdated = await models.PresetModel.findOne({ where: { id: id } })

  response(res, 200, presetUpdated)
}

module.exports = { updatePreset: catchedAsync(updatePreset) }
