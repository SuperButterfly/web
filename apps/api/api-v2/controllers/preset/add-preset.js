const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const addPreset = async (req, res, next) => {
  const { body } = req

  const newPreset = await models.PresetModel.create(body)

  if (!newPreset) throw new ClientError('Error to create preset', 400)

  response(res, 200, newPreset)
}

module.exports = { addPreset: catchedAsync(addPreset) }
