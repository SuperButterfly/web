const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const patchCssClass = async (req, res) => {
  const { id } = req.params
  const { body } = req

  const cssClass = await models.CssClassModel.findByPk(id)
  if (!cssClass) throw new ClientError('CssClass not found', 404)

  // Actualizar las propiedades dentro de style
  const updatedStyle = { ...cssClass.dataValues.style, ...body.style }
  await cssClass.update({ style: updatedStyle })
  response(res, 201, cssClass)
}

module.exports = { patchCssClass: catchedAsync(patchCssClass) }
