const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getAllCssClass = async (req, res) => {
  const cssClass = await models.CssClassModel.findAll()
  if (!cssClass.length) throw new ClientError('No CssClass was found', 404)
  return response(res, 201, cssClass)
}

module.exports = {
  getAllCssClass: catchedAsync(getAllCssClass)
}
