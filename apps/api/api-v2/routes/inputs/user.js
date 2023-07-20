const { Router } = require('express')
const { addUser } = require('../../controllers/users/add-user')
const { updateUser } = require('../../controllers/users/update-user')
const { deleteUser } = require('../../controllers/users/delete-user')
const { loginUser } = require('../../controllers/users/login-user')
const { patchUser } = require('../../controllers/users/patch-user')

const routerUser = Router()

routerUser
  .post('/register', addUser)
  .post('/login', loginUser)
  .patch('/:id', patchUser)
  .put('/:id', updateUser)
  .delete('/:id', deleteUser)

module.exports = routerUser
