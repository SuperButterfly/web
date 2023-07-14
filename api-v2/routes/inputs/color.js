const { Router } = require('express')
const routerColor = Router()

const { addColor } = require('../../controllers/color/add-color')
const { updateColor } = require('../../controllers/color/udpate-color')
const { patchColor } = require('../../controllers/color/patch-color')
const { deleteColor } = require('../../controllers/color/delete-color')

routerColor.post('/', addColor)

routerColor.put('/:id', updateColor)

routerColor.patch('/:id', patchColor)

routerColor.delete('/:id', deleteColor)

module.exports = routerColor
