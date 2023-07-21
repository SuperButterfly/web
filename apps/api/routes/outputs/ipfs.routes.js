const { Router } = require('express')
const ipfsRputer = Router()

const { getAllPinnedFiles, getPinnedFileById, getStorageUsed } = require('../../controllers/inputs/ipfs.controllers.js')

ipfsRputer.get('/pin', getAllPinnedFiles)
ipfsRputer.get('/pin/:id', getPinnedFileById)
ipfsRputer.get('/storage-used', getStorageUsed)

module.exports = ipfsRputer
