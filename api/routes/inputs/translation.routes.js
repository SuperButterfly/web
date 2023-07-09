const { Router } = require('express')
const translationRouter = Router()
const {
  addFile
} = require('../../controllers/inputs/translation.controllers.js')

translationRouter.post('/addFile', addFile)

module.exports = translationRouter
