const { Router } = require('express')
const routerPreset = Router()

routerPreset.get('/all', getAllPresets)

routerPreset.get('/:id', getPresetById)

module.exports = routerPreset
