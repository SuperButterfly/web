const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getAllDatatable = async (req, res) => {
  const datatable = await models.DatatableModel.findAll()
  if (!datatable.length) throw new ClientError('No datatable was found', 404)
  return response(res, 201, datatable)
}

module.exports = { getAllDatatable: catchedAsync(getAllDatatable) }
