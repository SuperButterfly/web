const { Router } = require('express')
const instanceRouter = Router()
const {
  getOneInstance,
  getWorkspaceInstances,
  getInstancesType,
  getAvailableInstances,
  listImages
} = require('../../controllers/outputs/instance.controllers.js')

instanceRouter.get('/types', getInstancesType)
instanceRouter.get('/workspace', getWorkspaceInstances)
instanceRouter.get('/:idInstance', getOneInstance)
instanceRouter.get('/:zone/availability', getAvailableInstances)
instanceRouter.get('/:zone/images', listImages)

module.exports = instanceRouter
