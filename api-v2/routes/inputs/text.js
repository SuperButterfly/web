const { Router } = require('express')
const routerText = Router()

routerText.post('/', addText)

routerText.put('/:id', updateText)

routerText.patch('/:id', modifyText)

routerText.delete('/:id', deleteText)

module.exports = routerText
