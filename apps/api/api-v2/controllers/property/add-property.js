const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const addProperty = async (req, res, next) => {
  const { style, event, state, other } = req.body

  const newProperty = await models.PropertyModel.create({ style, event, state, other })

  if (!newProperty) throw new ClientError('Erro al crear el property', 400)

  response(res, 200, newProperty)
}

module.exports = { addProperty: catchedAsync(addProperty) }
