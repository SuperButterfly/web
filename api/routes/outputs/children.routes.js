const {
  getComponentChildrens,
  getChildren
} = require('../../controllers/outputs/children.controllers.js')
const { verifyToken } = require('../../middlewares/auth.js')

const { Router } = require('express')
const childrenRouter = Router()

// get  /:id  getChildren
childrenRouter.get('/', [verifyToken], getChildren)

// get /ofuser/:componentId getComponentChildrens
childrenRouter.get(
  '/ofcomponent/:componentId',
  [verifyToken],
  getComponentChildrens
)

module.exports = childrenRouter
