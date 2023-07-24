const { Router } = require('express')
const { addDatatable } = require('../../controllers/datatable/add-datatable')
const {
  updateDatatable
} = require('../../controllers/datatable/update-datatable')
const {
  patchDatatable
} = require('../../controllers/datatable/patch-datatable')
const {
  deleteDatatable
} = require('../../controllers/datatable/delete-datatable')
const validateDatatable = require('../../middlewares/validation/datatable/datatableValidation')

const routerDatatable = Router()

routerDatatable
  .post('/', validateDatatable, addDatatable)
  .put('/:id', updateDatatable)
  .patch('/:id', patchDatatable)
  .delete('/:id', deleteDatatable)

module.exports = routerDatatable
