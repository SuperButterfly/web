const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const patchPreset = async (req, res, next) => {
  const { body } = req
  const { id } = req.params
  const property = await models.PropertyModel.findByPk(id)
  if (!property) throw new ClientError('Property Not Found', 400)
  // Aplica solo las propiedades proporcionadas en el cuerpo de la solicitud (patch) en lugar de actualizar todo el objeto
  Object.assign(property, body)
  await property.save()
  response(res, 201, property)
}

module.exports = { updateProperty: catchedAsync(patchPreset) }
