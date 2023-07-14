const { Router } = require('express')
const routerLayaout = Router()

routerLayaout.post('/', addLayaout)

routerLayaout.put('/:id', updateLayaout)

routerLayaout.patch('/:id', modifyLayaout)

routerLayaout.delete('/:id', deleteLayaout)

module.exports = routerLayaout
