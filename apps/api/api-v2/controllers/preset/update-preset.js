const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const updatePreset = async (req, res, next) => {
  const { id } = req.params
  const { body } = req

  const preset = await models.PresetModel.findOne({ where: { id } })

  if (!preset) throw new ClientError('Preset not found', 404)

  await preset.update(body)

  await preset.save()

  response(res, 200, preset)
}

module.exports = { updatePreset: catchedAsync(updatePreset) }
