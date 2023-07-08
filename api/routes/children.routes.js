'use strict'
const { verifyToken } = require('../middlewares/auth.js')

const { Router } = require('express')
const childrenRouter = Router()
const {
  addSection,
  addChildren,
  getChildren,
  getComponentChildrens,
  updateChildren,
  deleteChildrenId
} = require('../controllers/children.controllers.js')

//  post  /:id addChildren  complex
childrenRouter.post('/tree/:componentId', [verifyToken], addSection)

// post  /:id addChildren  simple
childrenRouter.post('/:componentId', [verifyToken], addChildren)

// get  /:id  getChildren
childrenRouter.get('/', [verifyToken], getChildren)

// get /ofuser/:componentId getComponentChildrens
childrenRouter.get(
  '/ofcomponent/:componentId',
  [verifyToken],
  getComponentChildrens
)

// patch  /:id  updateChildren
childrenRouter.patch('/:id', [verifyToken], updateChildren)

// patch  /delete/:id  deleteChildrenId
childrenRouter.patch('/delete/:id', [verifyToken], deleteChildrenId)

module.exports = childrenRouter
