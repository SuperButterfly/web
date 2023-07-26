const { Router } = require('express')
const instanceRouter = Router()
const {
  getOneInstance,
  getInstancesType
} = require('../../controllers/outputs/instance.controllers.js')

instanceRouter.get('/types', getInstancesType)
instanceRouter.get('/:idTemplate', getOneInstance)

module.exports = instanceRouter
