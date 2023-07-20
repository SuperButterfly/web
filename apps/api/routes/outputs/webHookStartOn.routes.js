const { Router } = require('express')
const webHookRouter = Router()
const {
  getWebhookSigningSecret,
  getAllWebhooks,
  getWebhookById
} = require('../../controllers/outputs/WebHookStartOn.controllers.js')

webHookRouter.get('/', getAllWebhooks)

webHookRouter.get('/:id', getWebhookById)

webHookRouter.get('/signing-secret', getWebhookSigningSecret)

module.exports = webHookRouter
