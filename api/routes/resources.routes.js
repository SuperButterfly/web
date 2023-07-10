const {
  getPhotos,
  getPhoto,
  uploadAsset,
  createFolder,
  updateFolder,
  deleteFolder,
  addFolderToFolder,
  getIcons
} = require('../controllers/resources.controllers.js')
const { Router } = require('express')
const resourcesRouter = Router()

resourcesRouter.get('/', getPhotos)

resourcesRouter.get('/icons', getIcons)

resourcesRouter.get('/:id', getPhoto)

resourcesRouter.post('/upload/:folderName', uploadAsset)

resourcesRouter.post('/newFolder/:templateId', createFolder)

resourcesRouter.post('/subFolder/:folderName', addFolderToFolder)

resourcesRouter.patch('/updateFolder/:folderName', updateFolder)

resourcesRouter.patch('/deleteFolder/:folderName', deleteFolder)

module.exports = resourcesRouter
