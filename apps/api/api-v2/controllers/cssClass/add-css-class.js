const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const addCssClass = async (req, res, next) => {
  const { body } = req

  const newCssClass = await models.CssClassModel.create(body)

  if (!newCssClass) throw new ClientError('Error al crear el CssClass', 400)

  response(res, 200, newCssClass)
}

module.exports = { addCssClass: catchedAsync(addCssClass) }
