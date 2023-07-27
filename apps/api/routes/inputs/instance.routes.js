const { Router } = require('express')
const instanceRouter = Router()
const {
  postInstance,
  updateInstance,
  deleteInstance
} = require('../../controllers/inputs/instance.controllers.js')

instanceRouter.post('/', postInstance)
instanceRouter.put('/:id', updateInstance)
instanceRouter.delete('/:idInstance', deleteInstance)

module.exports = instanceRouter
