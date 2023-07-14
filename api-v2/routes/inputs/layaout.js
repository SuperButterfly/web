const { Router } = require('express')
const routerLayaout = Router()

const { addLayaout } = require('../../controllers/layaout/add-layaout')
const { updateLayaout } = require('../../controllers/layaout/update-layaout')
const { patchLayaout } = require('../../controllers/layaout/patch-layaout')
const { deleteLayaout } = require('../../controllers/layaout/delete-layaout')

routerLayaout.post('/', addLayaout)

routerLayaout.put('/:id', updateLayaout)

routerLayaout.patch('/:id', patchLayaout)

routerLayaout.delete('/:id', deleteLayaout)

module.exports = routerLayaout
