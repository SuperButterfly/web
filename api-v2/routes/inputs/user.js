const { Router } = require('express')
const { addUser } = require('../../controllers/users/add-user')
const { updateUser } = require('../../controllers/users/update-user')
const { deleteUser } = require('../../controllers/users/delete-user')

const routerUser = Router()

routerUser.post('/', addUser).put('/:id', updateUser).delete('/:id', deleteUser)

module.exports = routerUser
