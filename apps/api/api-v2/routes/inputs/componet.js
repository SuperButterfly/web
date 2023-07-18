const { Router } = require('express')
const routerComponent = Router()

const { addComponet } = require('../../controllers/componet/add-componet')
const {
  updateComponent
} = require('../../controllers/componet/update-componet')
const { patchComponent } = require('../../controllers/componet/patch-component')
const {
  deletedComponent
} = require('../../controllers/componet/delete-componet')

routerComponent
  .post('/', addComponet)

  .put('/:id', updateComponent)

  .patch('/:id', patchComponent)

  .delete('/:id', deletedComponent)

module.exports = routerComponent
