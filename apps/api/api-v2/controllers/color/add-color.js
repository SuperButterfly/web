const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const addColor = async (req, res, next) => {
  const { value, type, presetId } = req.body

  const newColor = await models.ColorModel.create({ value, type, presetId })

  if (!newColor) throw new ClientError('Error to create color', 400)

  response(res, 200, newColor)
}

module.exports = { addColor: catchedAsync(addColor) }
