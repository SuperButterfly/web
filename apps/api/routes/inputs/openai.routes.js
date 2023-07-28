const {
  chatOpenaiWithCursorPosition,
  chatOpenaiWithTextSelect
} = require('../../controllers/inputs/openai.controllers.js')
const { Router } = require('express')
const openaiInputRouter = Router()

openaiInputRouter.post('/chatWithCursorPosition', chatOpenaiWithCursorPosition)

openaiInputRouter.post('/chatWithTextSelect', chatOpenaiWithTextSelect)

module.exports = openaiInputRouter
