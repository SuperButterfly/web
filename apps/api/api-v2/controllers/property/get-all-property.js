const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getAllProperty = async (req, res, next) => {
  const properties = await models.Property.findAll()
  if (!properties) throw new ClientError('Error al traer las Properties', 400)
  response(res, 200, properties)
}

module.exports = { getAllProperty: catchedAsync(getAllProperty) }
