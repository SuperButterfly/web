const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const deleteCssClass = async (req, res) => {
  const { id } = req.params
  const cssClass = await models.CssClassModel.findByPk(id)
  if (!cssClass) throw new ClientError('CssClass not found', 404)
  await cssClass.update({ isDeleted: true })
  response(res, 201, cssClass)
}

module.exports = { deleteCssClass: catchedAsync(deleteCssClass) }
