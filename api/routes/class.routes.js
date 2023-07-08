'use strict'

const { verifyToken } = require('../middlewares/auth.js')
const { Router } = require('express')
const classRouter = Router()
const {
  addClass,
  editClass,
  deleteClass
} = require('../controllers/class.controllers.js')

classRouter.post('/:projectId', [verifyToken], addClass)

classRouter.patch('/delete/:projectId', [verifyToken], deleteClass)

classRouter.patch('/:projectId', [verifyToken], editClass)

module.exports = classRouter
