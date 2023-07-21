
const { chatOpenaiWithContext, chatOpenaiWithoutContext } = require('../../controllers/inputs/openai.controllers.js')
const { Router } = require('express')
const openaiRouter = Router()

openaiRouter.post('/chatWithContext', chatOpenaiWithContext)

openaiRouter.post('/chatWithoutContext', chatOpenaiWithoutContext)

module.exports = openaiRouter