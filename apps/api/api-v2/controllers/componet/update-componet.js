const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const updateComponent = async (req, res, next) => {
  const { tag, order, attributes, nativeAttributes, isShow } = req.body
  const { id } = req.params

  const component = await models.ComponentModel.findOne({ where: { id } })

  if (!component) {
    throw new ClientError('Component Not Found', 404)
  }

  await component.update({ tag, order, attributes, nativeAttributes, isShow  })

  response(res, 201, component)
}

module.exports = { updateComponent: catchedAsync(updateComponent) }
