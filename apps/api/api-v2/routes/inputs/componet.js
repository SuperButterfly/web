const { Router } = require('express')
const routerComponent = Router()

const { addComponet } = require('../../controllers/component/add-component')
const {
  deleteMultiComponent
} = require('../../controllers/component/delete-multi-component')
const {
  cloneComponent
} = require('../../controllers/component/clone-component')
const {
  updateComponent
} = require('../../controllers/component/update-component')
const {
  patchComponent
} = require('../../controllers/component/patch-component')
const {
  deletedComponent
} = require('../../controllers/component/delete-component')
const {
  addComponentFatherByGroup
} = require('../../controllers/component/add-component-father-by-group')
const validateComponentMiddleware = require('../../middlewares/validation/component/componentValidation')

routerComponent
  .post('/', validateComponentMiddleware, addComponet)

  .delete('/', deleteMultiComponent)

  .post('/:id', cloneComponent)

  .put('/:id', updateComponent)

  .patch('/:id', patchComponent)

  .delete('/:id', deletedComponent)

  .post('/group/:id', addComponentFatherByGroup)

module.exports = routerComponent
