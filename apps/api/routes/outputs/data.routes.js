const { Router } = require('express')
const dataRouter = Router()

const {
  getGasPrice,
  getAddressBalance,
  getContractBalance
} = require('../../controllers/outputs/ipfs.controllers.js')

dataRouter.get('/:network/address/:address/balance/native', getGasPrice)
dataRouter.get('/:network/erc20/contractAddress/balance', getAddressBalance)
dataRouter.get('/:network/address/:address/balance/native', getContractBalance)

module.exports = dataRouter
