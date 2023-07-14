const { Router } = require('express')
const routerLayaout = Router()

routerLayaout.get('/all', getAllLayaouts)

routerLayaout.get('/:id', getLayaoutById)

module.exports = routerLayaout
