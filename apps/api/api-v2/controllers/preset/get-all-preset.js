const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getAllPreset = async (req, res, next) => {
  const allPreset = await models.PresetModel.findAll()

  if (!allPreset) throw new ClientError('Error fetching the presets', 404)

  response(res, 200, allPreset)
}

module.exports = { getAllPreset: catchedAsync(getAllPreset) }
