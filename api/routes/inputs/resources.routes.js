const {
  uploadAsset,
  createFolder,
  updateFolder,
  deleteFolder,
  addFolderToFolder
} = require('../../controllers/inputs/resources.controllers.js')
const { Router } = require('express')
const resourcesRouter = Router()

resourcesRouter.post('/upload/:folderName', uploadAsset)

resourcesRouter.post('/newFolder/:templateId', createFolder)

resourcesRouter.post('/subFolder/:folderName', addFolderToFolder)

resourcesRouter.patch('/updateFolder/:folderName', updateFolder)

resourcesRouter.patch('/deleteFolder/:folderName', deleteFolder)

module.exports = resourcesRouter
