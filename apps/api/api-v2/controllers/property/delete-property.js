const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const deleteProperty = async (req, res, next) => {
  const { id } = req.params
  const property = await models.Property.findByPk(id)
  if (!property) throw new ClientError('Property not found', 404)
  await property.update({ deleted: true })
  response(res, 201, property)
}

module.exports = { deleteProperty: catchedAsync(deleteProperty) }
