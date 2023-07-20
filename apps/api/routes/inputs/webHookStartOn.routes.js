const { Router } = require('express')
const webHookRouter = Router()
const {
  regenerateWebhookSigningSecret,
  resendWebhook,
  cancelWebhook
} = require('../../controllers/outputs/webHookStartOn.controllers')

webHookRouter.post('/:id/resend', resendWebhook)

webHookRouter.post('/signing-secret/regenerate', regenerateWebhookSigningSecret)

webHookRouter.post('/:id/cancel', cancelWebhook)

module.exports = webHookRouter
