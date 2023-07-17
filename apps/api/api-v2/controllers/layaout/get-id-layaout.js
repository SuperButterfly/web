const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getIdLayaout = async (req, res, next) => {
  const { id } = req.params

  const layaout = await models.LayaoutModel.findByPk(id)

  if (!layaout) throw new ClientError('Failed to find layaout by ID', 404)

  response(res, 200, layaout)
}

module.exports = { getIdLayaout: catchedAsync(getIdLayaout) }
