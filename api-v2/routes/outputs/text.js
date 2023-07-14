const { Router } = require('express')
const routerText = Router()

routerText.get('/all', getAllTexts)

routerText.get('/:id', getTextById)

module.exports = routerText
