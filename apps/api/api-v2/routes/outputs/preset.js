const { Router } = require('express')
const routerPreset = Router()

const { getAllPreset } = require('../../controllers/preset/get-all-preset')
const { getIdPreset } = require('../../controllers/preset/get-id-preset')

routerPreset.get('/', getAllPreset).get('/:id', getIdPreset)

module.exports = routerPreset
