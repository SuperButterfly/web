const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const updateProperty = async (req, res, next) => {
  const { body } = req.body
  const { id } = req.params
  const property = await models.PropertyModel.findOne({ where: { id } })
  if (!property) {
    throw new ClientError('Property Not Found', 404)
  }
  await property.update(body)
  response(res, 201, property)
}

module.exports = { updateProperty: catchedAsync(updateProperty) }
