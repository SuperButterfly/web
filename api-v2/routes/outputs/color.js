const { Router } = require('express')
const routerColor = Router()

routerColor.get('/all', getAllColors)

routerColor.get('/:id', getColorById)

module.exports = routerColor
