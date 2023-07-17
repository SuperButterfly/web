const {
  getParentId,
  getComponent,
  getProjectComponents
} = require('../../controllers/outputs/component.controllers.js')
const { verifyToken } = require('../../middlewares/auth.js')
const { Router } = require('express')
const componentRouter = Router()

// get  /:projectId  getProjectComponents
componentRouter.get('/template/:projectId', [verifyToken], getProjectComponents)
// get /getParentId
componentRouter.get('/getParentId', [verifyToken], getParentId)
// get  /:id  getComponent
componentRouter.get('/:id', [verifyToken], getComponent)

module.exports = componentRouter
