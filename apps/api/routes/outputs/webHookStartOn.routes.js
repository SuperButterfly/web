const { Router } = require('express')
const webHookRouter = Router()

const {
  getWebhookSigningSecret,
  getAllWebhooks,
  getWebhookById
} = require('../../controllers/outputs/WebHookStartOn.controllers')

webHookRouter.get('/signing-secret', getWebhookSigningSecret)
webHookRouter.get('/', getAllWebhooks)
webHookRouter.get('/:id', getWebhookById)

module.exports = webHookRouter
