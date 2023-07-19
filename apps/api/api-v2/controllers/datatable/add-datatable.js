const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const addDatatable = async (req, res) => {
  const { row, workSpaceId } = req.body

  const newDatatable = await models.DatatableModel.create({ row, workSpaceId })

  if (!newDatatable) throw new ClientError('Create Datatable Failed', 400)

  return response(res, 200, newDatatable)
}

module.exports = { addDatatable: catchedAsync(addDatatable) }
