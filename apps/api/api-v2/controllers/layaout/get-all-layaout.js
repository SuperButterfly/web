const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getAllLayaout = async (req, res, next) => {
  const { id } = req.params

  const preset = await models.PresetModel.findByPk(id)

  if (!preset) throw new ClientError('Error not found preset', 404)

  const allLayaout = await models.LayaoutModel.findAll({
    where: { presetId: id }
  })

  if (!allLayaout) throw new ClientError('Error fetching the layaouts', 404)

  response(res, 200, allLayaout)
}

module.exports = { getAllLayaout: catchedAsync(getAllLayaout) }
