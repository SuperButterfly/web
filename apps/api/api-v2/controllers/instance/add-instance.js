const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const addInstance = async (req, res, next) => {
  const body = req.body

  const newInstance = await models.InstanceModel.create(body)

  if (!newInstance) throw new ClientError('Error to create Instance', 400)

  response(res, 200, newInstance)
}

module.exports = { addInstance: catchedAsync(addInstance) }
