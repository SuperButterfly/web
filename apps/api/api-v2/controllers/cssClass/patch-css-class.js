const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const patchCssClass = catchedAsync(async (req, res) => {
  const { id } = req.params
  const { body } = req

  const cssClass = await models.CssClassModel.findByPk(id)
  if (!cssClass) throw new ClientError('CssClass not found', 404)

  // Actualizar las propiedades dentro de style
  console.log(body)
  const updatedStyle = { ...cssClass.dataValues.style, ...body.style }
  console.log(updatedStyle)
  await cssClass.update({ style: updatedStyle })
  response(res, 201, cssClass)
})

module.exports = { patchCssClass }
