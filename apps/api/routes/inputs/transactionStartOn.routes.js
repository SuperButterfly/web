const { Router } = require('express')
const transactionRouter = Router()

const {
  createTransaction
} = require('../../controllers/inputs/transactionStartOn.controllers')

transactionRouter.post('/', createTransaction)

module.exports = transactionRouter
