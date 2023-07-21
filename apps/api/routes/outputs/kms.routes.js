const { Router } = require('express')
const faucetRouter = Router()

const {
  getAllKMS,
  getKMSById,
  getWallets,
  getWalletByAddress
} = require('../../controllers/outputs/kms.controllers.js')

faucetRouter.get('/', getAllKMS)
faucetRouter.get('/', getKMSById)
faucetRouter.get('/', getWallets)
faucetRouter.get('/', getWalletByAddress)

module.exports = faucetRouter
