const { Router } = require('express')
const routerPreset = Router()

routerPreset.post('/', addPreset)

routerPreset.put('/:id', updatePreset)

routerPreset.patch('/:id', modifyPreset)

routerPreset.delete('/:id', deletePreset)

module.exports = routerPreset
