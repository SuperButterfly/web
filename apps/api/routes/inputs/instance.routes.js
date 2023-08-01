const { Router } = require('express')
const instanceRouter = Router()
const {
  postInstance,
  updateInstance,
  deleteInstance,
  powerOnInstance
} = require('../../controllers/inputs/instance.controllers.js')

instanceRouter.post('/', postInstance)
instanceRouter.post('/action/power', powerOnInstance)
instanceRouter.put('/:id', updateInstance)
instanceRouter.delete('/:idInstance', deleteInstance)

module.exports = instanceRouter
