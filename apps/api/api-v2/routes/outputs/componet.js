const { Router } = require('express')
const routerComponent = Router()

const {
  getAllComponents
} = require('../../controllers/componet/get-all-componet')
const getIdComponet = require('../../controllers/componet/get-id-componet')

routerComponent
  .get('/', getAllComponents)

  .get('/:id', getIdComponet)

module.exports = routerComponent
