const {
  getPhotos,
  getPhoto,
  getIcons
} = require('../../controllers/outputs/resources.controllers.js')
const { Router } = require('express')
const resourcesRouter = Router()

resourcesRouter.get('/', getPhotos)

resourcesRouter.get('/icons', getIcons)

resourcesRouter.get('/:id', getPhoto)

module.exports = resourcesRouter
