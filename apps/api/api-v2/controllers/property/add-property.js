const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const addProperty = async (req, res, next) => {
  const body = req.body

  const newProperty = await models.PropertyModel.create(body)

  if (!newProperty) throw new ClientError('Erro al crear el Property', 400)

  response(res, 200, newProperty)
}

module.exports = { addProperty: catchedAsync(addProperty) }
