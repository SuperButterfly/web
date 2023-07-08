const { Router } = require('express')
const instanceRouter = Router()
const {
  getOneInstance,
  deleteInstance
} = require('../../controllers/outputs/instance.controllers.js')

instanceRouter.get('/:idTemplate', getOneInstance)
instanceRouter.delete('/:idInstance', deleteInstance)

module.exports = instanceRouter
