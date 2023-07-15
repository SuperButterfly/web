const { Router } = require('express')
const { getAllUsers } = require('../../controllers/users/get-all-user')
const { getIdUser } = require('../../controllers/users/get-id-user')

const routerUser = Router()

routerUser.get('/', getAllUsers).get('/:id', getIdUser)

module.exports = routerUser
