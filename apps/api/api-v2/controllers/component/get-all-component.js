const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getAllComponents = async (req, res, next) => {
  const component = await models.ComponentModel.findAll()
  if (!component) throw new ClientError('Error not found component', 400)
  response(res, 200, component)
}

module.exports = { getAllComponents: catchedAsync(getAllComponents) }
