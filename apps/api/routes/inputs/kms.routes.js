const { Router } = require('express')
const faucetRouter = Router()

const {
  createKMS,
  deleteWalletByAddress,
  updateKMSById,
  deleteKMSById,
  createWallet,
  updateWalletByAddress
} = require('../../controllers/inputs/faucet.controllers.js')

faucetRouter.post('/', createKMS)
faucetRouter.post('/', createWallet)
faucetRouter.patch('/', updateKMSById)
faucetRouter.patch('/', updateWalletByAddress)
faucetRouter.delete('/', deleteKMSById)
faucetRouter.delete('/', deleteWalletByAddress)

module.exports = faucetRouter
