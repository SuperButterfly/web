const { Router } = require('express')
const kmsRouter = Router()

const {
  getAllKMS,
  getKMSById,
  getWallets,
  getWalletByAddress
} = require('../../controllers/outputs/kms.controllers.js')

kmsRouter.get('/', getAllKMS)
kmsRouter.get('/:id', getKMSById)
kmsRouter.get('/wallet', getWallets)
kmsRouter.get('/wallet/:address', getWalletByAddress)

module.exports = kmsRouter
