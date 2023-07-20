const { Router } = require('express')
const libraryRouter = Router()
const {
  getLibraries,
  getLibraryById
} = require('../../controllers/outputs/library.controllers.js')

libraryRouter.get('/', getLibraries)
libraryRouter.get('/:id', getLibraryById)

module.exports = libraryRouter
