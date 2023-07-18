const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const addDatatable = async (req, res) => {
  const { row } = req.body
  console.log(row)
  const newDatatable = await models.DatatableModel.create({ row })
  if (!newDatatable) throw new ClientError('Create Datatable Failed', 400)

  return response(res, 200, newDatatable)
}

module.exports = { addDatatable: catchedAsync(addDatatable) }
