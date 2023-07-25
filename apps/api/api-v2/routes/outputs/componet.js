const { Router } = require('express')
const routerComponent = Router()

const {
  getAllComponents
} = require('../../controllers/component/get-all-component')
const {
  getIdComponent
} = require('../../controllers/component/get-id-component')
const {
  getIdComponentByProjectId
} = require('../../controllers/component/get-id-component-by-project-id')

routerComponent
  .get('/', getAllComponents)

  .get('/:id', getIdComponent)

  .get('/project/:projectId', getIdComponentByProjectId)

module.exports = routerComponent
