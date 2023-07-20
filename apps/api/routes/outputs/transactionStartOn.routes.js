const { Router } = require('express')
const transactionRouter = Router()

const {
  getAllTransactions,
  getTransactionById
} = require('../../controllers/outputs/transactionStartOn.controllers')

transactionRouter.get('/', getAllTransactions)
transactionRouter.get('/:id', getTransactionById)

module.exports = transactionRouter
