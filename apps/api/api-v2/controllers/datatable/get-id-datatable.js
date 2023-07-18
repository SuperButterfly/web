const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getIdDatatable = async (req, res) => {
  const { id } = req.params
  const datatable = await models.DatatableModel.findByPk(id)
  if (!datatable) throw new ClientError('Datatable not found', 404)
  return response(res, 200, datatable)
}
module.exports = {
  getIdDatatable: catchedAsync(getIdDatatable)
}
