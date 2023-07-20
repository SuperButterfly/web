const express = require('express')
const smartContractRouter = express.Router()

const {
  getAllSmartContracts,
  getSmartContractsForNetwork,
  getSmartContractByAddress
} = require('../../controllers/outputs/smartContract.controllers')

smartContractRouter.get('/from-template', getAllSmartContracts)
smartContractRouter.get('/:network', getSmartContractsForNetwork)
smartContractRouter.get('/:network/:address', getSmartContractByAddress)

module.exports = smartContractRouter
