const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getIdProperty = async (req, res, next) => {
  const { id } = req.params

  const property = await models.PropertyModel.findByPk(id)

  if (!property) throw new ClientError('Property Not Found', 404)
  
  response(res, 201, property)
}

module.exports = { getIdProperty: catchedAsync(getIdProperty) }
