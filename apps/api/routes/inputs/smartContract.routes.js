const { Router } = require('express')
const smartContractRouter = Router()

const {
  handleSmartContractRequest
} = require('../../controllers/inputs/smartContract.controllers')

smartContractRouter.post('/:network/:address/*', handleSmartContractRequest)

module.exports = smartContractRouter
