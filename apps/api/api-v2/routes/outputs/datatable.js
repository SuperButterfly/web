const { Router } = require('express')
const {
  getAllDatatable
} = require('../../controllers/datatable/get-all-datatable')
const {
  getIdDatatable
} = require('../../controllers/datatable/get-id-datatable')

const routerDatatable = Router()

routerDatatable.get('/', getAllDatatable).get('/:id', getIdDatatable)

module.exports = routerDatatable
