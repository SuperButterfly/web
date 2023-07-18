const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getIdCssClass = async (req, res, next) => {
  const { id } = req.params
  const cssClass = await models.CssClassModel.findByPk(id)
  if (!cssClass) throw new ClientError('CssClass not found', 404)
  response(res, 201, cssClass)
}

module.exports = { getIdCssClass: catchedAsync(getIdCssClass) }
