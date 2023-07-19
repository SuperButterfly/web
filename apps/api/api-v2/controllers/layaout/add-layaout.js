const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const addLayaout = async (req, res, next) => {
  const { name, value } = req.body

  const newLayaout = await models.LayaoutModel.create({ name, value })

  if (!newLayaout) throw new ClientError('Error to create layaout', 400)

  response(res, 200, newLayaout)
}

module.exports = { addLayaout: catchedAsync(addLayaout) }
