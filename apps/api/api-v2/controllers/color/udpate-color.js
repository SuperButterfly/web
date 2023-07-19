const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const updateColor = async (req, res, next) => {
    const { id } = req.params
  const body = req.body

  const color = await models.ColorModel.findOne({ where: { id } })

  if (!color) throw new ClientError('Color not found', 404)

  await color.update(body)

  await color.save()

  response(res, 200, color)
}

module.exports = { updateColor: catchedAsync(updateColor) }
