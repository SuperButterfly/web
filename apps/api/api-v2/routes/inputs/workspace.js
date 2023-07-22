const { Router } = require('express')
const { addWorkSpace } = require('../../controllers/workspace/add-workspace')
const {
  updateWorkSpace
} = require('../../controllers/workspace/update-workspace')
const {
  deleteWorkSpace
} = require('../../controllers/workspace/delete-wokspace')
const validateWorkspace = require('../../middlewares/validation/workspace/workspaceValidation')

const routerWorkSpace = Router()

routerWorkSpace
  .post('/', validateWorkspace, addWorkSpace)
  .put('/:id', updateWorkSpace)
  .delete('/:id', deleteWorkSpace)

module.exports = routerWorkSpace
