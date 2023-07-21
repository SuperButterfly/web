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
ipfsRouter.patch('/pin/:id', updatePinnedFileById)
ipfsRouter.delete('/pin/:id', deletePinnedFileById)
ipfsRouter.post('/file', uploadFileOnIPFS)
ipfsRouter.post('/folder', uploadFolderOnIPFS)
ipfsRouter.post('/json', uploadJSONOnIPFS)

module.exports = ipfsRouter
