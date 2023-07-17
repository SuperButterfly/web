const { Router } = require('express')
const routerColor = Router()

const { addColor } = require('../../controllers/color/add-color')
const { updateColor } = require('../../controllers/color/udpate-color')
const { patchColor } = require('../../controllers/color/patch-color')
const { deleteColor } = require('../../controllers/color/delete-color')

routerColor
  .post('/', addColor)
  .put('/:id', updateColor)
  .patch('/:id', patchColor)
  .delete('/:id', deleteColor)

module.exports = routerColor
