const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getAllLayaout = async (req, res, next) => {
  const allLayaout = await models.LayaoutModel.findAll()

  if (!allLayaout) throw new ClientError('Error fetching the layaouts', 404)

  response(res, 200, allLayaout)
}

module.exports = { getAllLayaout: catchedAsync(getAllLayaout) }
