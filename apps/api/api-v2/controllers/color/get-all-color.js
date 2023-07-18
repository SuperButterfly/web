const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getAllColor = async (req, res, next) => {
    const allColors = await models.ColorModel.findAll()

  if (!allColors) throw new ClientError('Error fetching the colors', 404)

  response(res, 200, allColors)
}

module.exports = { getAllColor: catchedAsync(getAllColor) }
