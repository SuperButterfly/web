const { Router } = require('express')
const { getAllUsers } = require('../../controllers/users/get-all-users')

const routerUser = Router()

routerUser.get('/', getAllUsers)

module.exports = routerUser
