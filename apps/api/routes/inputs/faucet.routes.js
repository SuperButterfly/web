const { Router } = require('express')
const faucetRouter = Router()

const {
  requestFaucet
} = require('../../controllers/inputs/faucet.controllers.js')

faucetRouter.post('/faucet/:network', requestFaucet)

module.exports = faucetRouter
