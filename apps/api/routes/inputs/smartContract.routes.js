const express = require('express')
const smartContractRouter = express.Router()

const {createSmartContractFromBytecode,createSmartContractFromTemplate,callSmartContract,readSmartContract,importExistingSmartContract} = require('../../controllers/inputs/smartContract.controllers')


smartContractRouter.post('/from-bytecode', createSmartContractFromBytecode)
smartContractRouter.post('/from-template', createSmartContractFromTemplate)
smartContractRouter.post('/:network/:address/call', callSmartContract)
smartContractRouter.post('/:network/:address/read', readSmartContract)
smartContractRouter.post('/import-existing', importExistingSmartContract)

module.exports = smartContractRouter
