const { Router } = require('express')
const { addUser } = require('../../controllers/users/add-user')

const routerUser = Router()

routerUser.post('/', addUser)

module.exports = routerUser
