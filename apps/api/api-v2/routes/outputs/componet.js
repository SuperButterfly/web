const { Router } = require('express')
const routerComponent = Router()

const {
  getAllComponents
} = require('../../controllers/component/get-all-component')
const {
  getIdComponent
} = require('../../controllers/component/get-id-component')

routerComponent
  .get('/', getAllComponents)

  .get('/:id', getIdComponent)

module.exports = routerComponent
