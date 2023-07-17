const { Router } = require('express')
const routerColor = Router()

const { getAllColor } = require('../../controllers/color/get-all-color')
const { getIdColor } = require('../../controllers/color/get-id-color')

routerColor.get('/all', getAllColor)

routerColor.get('/:id', getIdColor)

module.exports = routerColor
