const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const updateDatatable = async (req, res) => {
  const { id } = req.params
  const { body } = req
  const datatable = await models.DatatableModel.findByPk(id)
  if (!datatable) throw new ClientError('Datatable not found', 404)
  await datatable.update(body)
  response(res, 201, datatable)
}

module.exports = { updateDatatable: catchedAsync(updateDatatable) }
