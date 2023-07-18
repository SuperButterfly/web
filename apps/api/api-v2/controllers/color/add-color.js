const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const addColor = async (req, res, next) => {
    const body = req.body

  const newColor = await models.ColorModel.create(body)

  if (!newColor) throw new ClientError('Error to create color', 400)

  response(res, 200, newColor)
}

module.exports = { addColor: catchedAsync(addColor) }
