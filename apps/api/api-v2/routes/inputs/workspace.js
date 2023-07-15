const { Router } = require('express')
const { addWorkSpace } = require('../../controllers/workspace/add-workspace')
const {
  updateWorkSpace
} = require('../../controllers/workspace/update-workspace')
const {
  deleteWorkSpace
} = require('../../controllers/workspace/delete-wokspace')

const routerWorkSpace = Router()

routerWorkSpace
  .get('/', addWorkSpace)
  .put('/:id', updateWorkSpace)
  .delete('/:id', deleteWorkSpace)

module.exports = routerWorkSpace
