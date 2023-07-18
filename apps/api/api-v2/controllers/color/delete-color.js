const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const deleteColor = async (req, res, next) => {
    const { id } = req.params

  const color = await models.ColorModel.findOne({ where: { id } })

  if (!color) throw new ClientError('Color not found', 404)

  await color.update({ isDeleted: true })

  await color.save()

  response(res, 200, color)
}

module.exports = { deleteColor: catchedAsync(deleteColor) }
