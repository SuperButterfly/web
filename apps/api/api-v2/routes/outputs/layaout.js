const { Router } = require('express')
const routerLayaout = Router()

const { getAllLayaout } = require('../../controllers/layaout/get-all-layaout')
const { getIdLayaout } = require('../../controllers/layaout/get-id-layaout')

routerLayaout.get('/', getAllLayaout).get('/:id', getIdLayaout)

module.exports = routerLayaout
