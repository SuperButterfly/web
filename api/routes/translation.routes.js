'use strict'

const { Router } = require('express')
const translationRouter = Router()
const { addFile } = require('../controllers/translation.controllers.js')

translationRouter.post('/addFile', addFile)

module.exports = translationRouter
