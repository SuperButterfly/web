const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const patchProperty = async (req, res, next) => {
  const { body } = req
  const { id } = req.params
  const property = await models.PropertyModel.findByPk(id)
  if (!property) throw new ClientError('Property Not Found', 400)
  // Aplica solo las propiedades proporcionadas en el cuerpo de la solicitud (patch) en lugar de actualizar todo el objeto
  const updatedData = { ...property.dataValues }

  for (const field in body) {
    if (field === 'style') {
      // Actualizar subatributos de style
      const updatedStyle = { ...updatedData.style }

      for (const subField in body.style) {
        if (subField in updatedStyle) {
          updatedStyle[subField] = {
            ...updatedStyle[subField],
            ...body.style[subField]
          }
        }
      }

      updatedData.style = updatedStyle
    } else if (field === 'event') {
      // Actualizar campo event
      console.log('este es el event ', body.event)
      updatedData.event = body.event
    } else {
      // Actualizar otros campos
      if (field in updatedData) {
        updatedData[field] = { ...updatedData[field], ...body[field] }
      }
    }
  }

  await property.update(updatedData)
  response(res, 201, property)
}

module.exports = { patchProperty: catchedAsync(patchProperty) }
