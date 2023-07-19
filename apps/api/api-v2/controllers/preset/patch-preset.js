const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const patchPreset = async (req, res, next) => {
  const { id } = req.params
  const body = req.body

  const preset = await models.PresetModel.findOne({ where: { id: id } })

  if (!preset) throw new ClientError('Preset not found', 404)

  await preset.update(body, { fields: Object.keys(body) })

  await preset.save()

  response(res, 200, preset)
}

module.exports = { patchPreset: catchedAsync(patchPreset) }
