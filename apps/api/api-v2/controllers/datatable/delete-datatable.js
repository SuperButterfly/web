const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const deleteDatatable = async (req, res) => {
  const { id } = req.params
  const datatable = await models.DatatableModel.findByPk(id)
  if (!datatable) throw new ClientError('Datatable not found', 404)
  await datatable.update({ isDeleted: true })
  response(res, 201, datatable)
}

module.exports = { deleteDatatable: catchedAsync(deleteDatatable) }
