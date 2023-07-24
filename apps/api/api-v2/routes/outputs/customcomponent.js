const { Router } = require('express')
const routerCustomComponent = Router()

const { getAllCustomComponent } = require('../../controllers/customcomponents/get-all-customcomponent')
const { getIdCustomComponent } = require('../../controllers/customcomponents/get-id-customcomponent')

routerCustomComponent
  .get('/', getAllCustomComponent)

  .get('/:id', getIdCustomComponent)

module.exports = routerCustomComponent
