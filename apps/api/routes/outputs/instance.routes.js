const { Router } = require('express')
const instanceRouter = Router()
const {
  getOneInstance,
  getInstancesType,
  deleteInstance
} = require('../../controllers/outputs/instance.controllers.js')

instanceRouter.get('/types', getInstancesType)
instanceRouter.get('/:idTemplate', getOneInstance)
instanceRouter.delete('/:idInstance', deleteInstance)

module.exports = instanceRouter
