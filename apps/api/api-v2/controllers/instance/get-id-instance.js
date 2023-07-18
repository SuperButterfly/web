const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getIdInstance = async (req, res, next) => {
  const { id } = req.params
  const instance = await models.InstanceModel.findByPk(id)
  if (!instance) throw new ClientError('Error not found Instance', 400)
  response(res, 200, instance)
}

module.exports = { getIdInstance: catchedAsync(getIdInstance) }
