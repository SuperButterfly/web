const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const addProperty = async (req, res, next) => {
  const { style, event, state, other, ComponentId } = req.body

  const component = await models.ComponentModel.findBypk(ComponentId)

  if (!component) throw new ClientError('Error Not Found Component', 404)

  const newProperty = await models.PropertyModel.create({
    style,
    event,
    state,
    other,
    ComponentId
  })

  response(res, 200, newProperty)
}

module.exports = { addProperty: catchedAsync(addProperty) }
