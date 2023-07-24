const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getIdPreset = async (req, res, next) => {
  const { id } = req.params

  const preset = await models.PresetModel.findByPk(id)

  if (!preset) throw new ClientError('Failed to find preset by ID', 404)

  response(res, 200, preset)
}

module.exports = { getIdPreset: catchedAsync(getIdPreset) }
