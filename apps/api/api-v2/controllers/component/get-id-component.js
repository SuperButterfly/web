const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getIdComponent = async (req, res, next) => {
  const { id } = req.params
  const component = await models.ComponentModel.findByPk(id)
  if (!component) throw new ClientError('Error not found component', 400)
  response(res, 200, component)
}

module.exports = { getIdComponent: catchedAsync(getIdComponent) }
