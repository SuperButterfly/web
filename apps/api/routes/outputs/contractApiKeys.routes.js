const { Router } = require('express')
const apiKeyRouter = Router()
const {
  getAllApiKeys
} = require('../../controllers/outputs/contractApiKeys.controllers.js')

apiKeyRouter.get('/', getAllApiKeys)

module.exports = apiKeyRouter
