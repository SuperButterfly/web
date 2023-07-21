const { Router } = require('express')
const ipfsRouter = Router()

const {
  getAllPinnedFiles,
  getPinnedFileById,
  getStorageUsed
} = require('../../controllers/outputs/ipfs.controllers.js')

ipfsRouter.get('/pin', getAllPinnedFiles)
ipfsRouter.get('/pin/:id', getPinnedFileById)
ipfsRouter.get('/storage-used', getStorageUsed)

module.exports = ipfsRouter
