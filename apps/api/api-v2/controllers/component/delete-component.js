const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const deletedComponent = async (req, res, next) => {
  const { id } = req.params
  const component = await models.ComponentModel.findOne({ where: { id } })
  if (!component) {
    throw new ClientError('Component Not Found', 404)
  }
  await component.update({ isDeleted: true })
  response(res, 201, component)
}

module.exports = { deletedComponent: catchedAsync(deletedComponent) }
