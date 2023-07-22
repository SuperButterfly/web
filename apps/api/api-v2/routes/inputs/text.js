const { Router } = require('express')
const routerText = Router()

const { addText } = require('../../controllers/text/add-text')
const { updateText } = require('../../controllers/text/update-text')
const { patchText } = require('../../controllers/text/patch-text')
const { deleteText } = require('../../controllers/text/delete-text')

const textValidationMiddleware = require('../../middlewares/validation/text/textValidation')

routerText
  .post('/', textValidationMiddleware, addText)
  .put('/:id', updateText)
  .patch('/:id', patchText)
  .delete('/:id', deleteText)

module.exports = routerText
