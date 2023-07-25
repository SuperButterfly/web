const { Router } = require('express')
const { addWorkSpace } = require('../../controllers/workspace/add-workspace')
const {
  updateWorkSpace
} = require('../../controllers/workspace/update-workspace')
const {
  deleteWorkSpace
} = require('../../controllers/workspace/delete-wokspace')
const { setUserToWorkSpace }= require('../../controllers/workspace/set-user-to-workspace')
const validateWorkspace = require('../../middlewares/validation/workspace/workspaceValidation')

const routerWorkSpace = Router()

routerWorkSpace
  .post('/', validateWorkspace, addWorkSpace)
  .post('/setuser', setUserToWorkSpace)
  .put('/:id', updateWorkSpace)
  .delete('/:id', deleteWorkSpace)

module.exports = routerWorkSpace
