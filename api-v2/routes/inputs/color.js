const { Router } = require('express')
const routerColor = Router()

routerColor.post('/', addColor)

routerColor.put('/:id', updateColor)

routerColor.patch('/:id', modifyColor)

routerColor.delete('/:id', deleteColor)

module.exports = routerColor
