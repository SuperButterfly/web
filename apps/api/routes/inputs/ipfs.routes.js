const { Router } = require('express')
const ipfsRputer = Router()

const {
  pinFileToIPFS,
  updatePinnedFileById,
  deletePinnedFileById,
  uploadFileOnIPFS,
  uploadFolderOnIPFS,
  uploadJSONOnIPFS
} = require('../../controllers/outputs/ipfs.controllers.js')

ipfsRputer.post('/pin', pinFileToIPFS)
ipfsRputer.patch('/pin/:id', updatePinnedFileById)
ipfsRputer.delete('/pin/:id', deletePinnedFileById)
ipfsRputer.post('/file', uploadFileOnIPFS)
ipfsRputer.post('/folder', uploadFolderOnIPFS)
ipfsRputer.post('/json', uploadJSONOnIPFS)

module.exports = ipfsRputer
