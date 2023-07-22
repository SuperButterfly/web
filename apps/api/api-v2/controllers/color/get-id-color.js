const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getIdColor = async (req, res, next) => {
  const { id } = req.params

  const color = await models.ColorModel.findByPk(id)

  if (!color) throw new ClientError('Failed to find color by ID', 404)

  response(res, 200, color)
}

module.exports = { getIdColor: catchedAsync(getIdColor) }
