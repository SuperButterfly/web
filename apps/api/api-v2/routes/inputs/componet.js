const { Router } = require('express')
const routerComponent = Router()

const { addComponet } = require('../../controllers/component/add-component')
const {
  updateComponent
} = require('../../controllers/component/update-component')
const {
  patchComponent
} = require('../../controllers/component/patch-component')
const {
  deletedComponent
} = require('../../controllers/component/delete-component')

routerComponent
  .post('/', addComponet)

  .put('/:id', updateComponent)

  .patch('/:id', patchComponent)

  .delete('/:id', deletedComponent)

module.exports = routerComponent
