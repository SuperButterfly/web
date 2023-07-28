const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getAllText = async (req, res, next) => {
  const { id } = req.params

  const preset = await models.PresetModel.findByPk(id)

  if (!preset) throw new ClientError('Error not found preset', 404)

  const allText = await models.TextModel.findAll({ where: { presetId: id } })

  if (!allText) throw new ClientError('Error fetching the texts', 404)

  response(res, 200, allText)
}

module.exports = { getAllText: catchedAsync(getAllText) }
