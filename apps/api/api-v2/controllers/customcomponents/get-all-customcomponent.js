const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getAllCustomComponent = async (req, res, next) => {
  const custom = await models.CustomComponentModel.findAll()

  if (!custom) throw new ClientError('Error fetching custom components', 400)
  
  response(res, 200, custom)
}

module.exports = { getAllCustomComponent: catchedAsync(getAllCustomComponent) }
