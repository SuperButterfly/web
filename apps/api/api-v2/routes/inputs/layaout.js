const { Router } = require('express')
const routerLayaout = Router()

const { addLayaout } = require('../../controllers/layaout/add-layaout')
const { updateLayaout } = require('../../controllers/layaout/update-layaout')
const { patchLayaout } = require('../../controllers/layaout/patch-layaout')
const { deleteLayaout } = require('../../controllers/layaout/delete-layaout')

const layaoutValidationMiddleware = require('../../middlewares/validation/layaout/layaoutValidation')

routerLayaout
  .post('/', layaoutValidationMiddleware, addLayaout)
  .put('/:id', updateLayaout)
  .patch('/:id', patchLayaout)
  .delete('/:id', deleteLayaout)

module.exports = routerLayaout
