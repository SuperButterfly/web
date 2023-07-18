const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const patchDatatable = async (req, res) => {
  const { id } = req.params
  const { row } = req.body

  const datatable = await models.DatatableModel.findByPk(id)
  if (!datatable) throw new ClientError('Datatable not found', 404)

  const updatedDatatable = { ...datatable.dataValues.row, ...row }
  await datatable.update({ row: updatedDatatable })
  response(res, 201, updatedDatatable)
}

module.exports = { patchDatatable: catchedAsync(patchDatatable) }
