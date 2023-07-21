const { Router } = require('express')
const routerPreset = Router()

const { addPreset } = require('../../controllers/preset/add-preset')
const { updatePreset } = require('../../controllers/preset/update-preset')
const { patchPreset } = require('../../controllers/preset/patch-preset')
const { deletePreset } = require('../../controllers/preset/delete-preset')

const presetValidationMiddleware = require('../../middlewares/validation/Preset/presetValidation')

routerPreset
  .post('/', presetValidationMiddleware, addPreset)
  .put('/:id', updatePreset)
  .patch('/:id', patchPreset)
  .delete('/:id', deletePreset)

module.exports = routerPreset
