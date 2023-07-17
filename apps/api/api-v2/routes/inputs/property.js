const { Router } = require('express')
const { addProperty } = require('../../controllers/property/add-property')
const { updateProperty } = require('../../controllers/property/update-property')
const { patchProperty } = require('../../controllers/property/patch-property')
const { deleteProperty } = require('../../controllers/property/delete-property')

const routerProperty = Router()

routerProperty
  .post('/', addProperty)
  .put('/:id', updateProperty)
  .patch('/:id', patchProperty)
  .delete('/:id', deleteProperty)

module.exports = routerProperty
