const { Router } = require('express')
const {
  getAllInstance
} = require('../../controllers/instance/get-all-instance')
const { getIdInstance } = require('../../controllers/instance/get-id-instance')
const routerInstance = Router()

routerInstance.get('/', getAllInstance).get('/:id', getIdInstance)

module.exports = routerInstance
