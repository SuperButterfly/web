const { Router } = require('express')
const instanceRouter = Router()
const {
  getOneInstance,
  getInstancesType,
  getAvailableInstances
} = require('../../controllers/outputs/instance.controllers.js')

instanceRouter.get('/types', getInstancesType)
instanceRouter.get('/:idTemplate', getOneInstance)
instanceRouter.get('/:zone/availability', getAvailableInstances)

module.exports = instanceRouter
