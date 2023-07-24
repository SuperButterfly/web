const { Router } = require('express')
const apiKeyRouter = Router()

const {
  createApiKey,
  deleteApiKeyById
} = require('../../controllers/inputs/contractApiKeys.controllers.js')

apiKeyRouter.post('/', createApiKey)
apiKeyRouter.delete('/:name', deleteApiKeyById)

module.exports = apiKeyRouter
