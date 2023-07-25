const { Router } = require('express')
const { addInstance } = require('../../controllers/instance/add-instance')
const { updateInstace } = require('../../controllers/instance/udpate-instance')
const { patchInstance } = require('../../controllers/instance/patch-instance')
const { deleteInstance } = require('../../controllers/instance/delete-instance')
const validateInstance = require('../../middlewares/validation/instance/instanceValidation')
const routerInstance = Router()

routerInstance
  .post('/', validateInstance, addInstance)
  .put('/:id', updateInstace)
  .patch('/:id', patchInstance)
  .delete('/:id', deleteInstance)

module.exports = routerInstance
