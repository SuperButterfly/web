const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getAllInstance = async (req, res, next) => {
  const allInstance = await models.InstanceModel.findAll()

  if (!allInstance) throw new ClientError('Error fetching the Instance', 404)

  response(res, 200, allInstance)
}

module.exports = { getAllInstance: catchedAsync(getAllInstance) }
