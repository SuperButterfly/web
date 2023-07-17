const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const deleteLayaout = async (req, res, next) => {
  const { id } = req.params

  const layaout = await models.LayaoutModel.findOne({ where: { id: id } })

  if (!layaout) throw new ClientError('Layaout not found', 404)

  await layaout.update({ isDeleted: true })

  await layaout.save()

  response(res, 200, layaout)
}

module.exports = { deleteLayaout: catchedAsync(deleteLayaout) }
