const { Router } = require('express')
const instanceRouter = Router()
const {
  postInstance,
  updateInstance
} = require('../../controllers/inputs/instance.controllers.js')

instanceRouter.post('/', postInstance)
instanceRouter.put('/:id', updateInstance)

module.exports = instanceRouter
