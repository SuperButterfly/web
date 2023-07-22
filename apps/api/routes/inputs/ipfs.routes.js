const { Router } = require('express')
const ipfsRouter = Router()

const {
  pinFileToIPFS,
  updatePinnedFileById,
  deletePinnedFileById,
  uploadFileOnIPFS,
  uploadFolderOnIPFS,
  uploadJSONOnIPFS
} = require('../../controllers/outputs/ipfs.controllers.js')

ipfsRouter.post('/pin', pinFileToIPFS)
ipfsRouter.post('/file', uploadFileOnIPFS)
ipfsRouter.post('/folder', uploadFolderOnIPFS)
ipfsRouter.post('/json', uploadJSONOnIPFS)
ipfsRouter.patch('/pin/:id', updatePinnedFileById)
ipfsRouter.delete('/pin/:id', deletePinnedFileById)

module.exports = ipfsRouter
