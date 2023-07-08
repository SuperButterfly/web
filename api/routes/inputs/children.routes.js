const {
  addSection,
  addChildren,
  updateChildren,
  deleteChildrenId
} = require('../../controllers/inputs/children.controllers.js')
const { verifyToken } = require('../../middlewares/auth.js')

const { Router } = require('express')
const childrenRouter = Router()

//  post  /:id addChildren  complex
childrenRouter.post('/tree/:componentId', [verifyToken], addSection)

// post  /:id addChildren  simple
childrenRouter.post('/:componentId', [verifyToken], addChildren)

// patch  /:id  updateChildren
childrenRouter.patch('/:id', [verifyToken], updateChildren)

// patch  /delete/:id  deleteChildrenId
childrenRouter.patch('/delete/:id', [verifyToken], deleteChildrenId)

module.exports = childrenRouter
