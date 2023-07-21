
const { chatOpenaiWithContext, chatOpenaiWithoutContext } = require('../../controllers/inputs/openai.controllers.js')
const { Router } = require('express')
const openaiInputRouter = Router()

openaiInputRouter.post('/chatWithContext', chatOpenaiWithContext)

openaiInputRouter.post('/chatWithoutContext', chatOpenaiWithoutContext)

module.exports = openaiInputRouter