const { Router } = require('express')
const routerCustomComponent = Router()

const { addCustomComponet } = require('../../controllers/customcomponents/add-customcomponent')
const { updateCustomComponent } = require('../../controllers/customcomponents/udpate-customcomponent')
const { patchCustomComponent } = require('../../controllers/customcomponents/patch-customcomponent')
const { deleteCustomComponent } = require('../../controllers/customcomponents/delete-customcomponent')

routerCustomComponent
  .post('/', addCustomComponet)

  .put('/:id', updateCustomComponent)

  .patch('/:id', patchCustomComponent)

  .delete('/:id', deleteCustomComponent)

module.exports = routerCustomComponent
