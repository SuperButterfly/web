const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const updateLayaout = async (req, res, next) => {
  const { id } = req.params
  const body = req.body

  const layaout = await models.LayaoutModel.findOne({ where: { id } })

  if (!layaout) throw new ClientError('Layaout not found', 404)

  await layaout.update(body)

  await layaout.save()

  response(res, 200, layaout)
}

module.exports = { updateLayaout: catchedAsync(updateLayaout) }
