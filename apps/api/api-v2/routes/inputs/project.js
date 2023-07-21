const { Router } = require('express')
const routerProject = Router()

const { addProject } = require('../../controllers/project/add-project')
const { updateProject } = require('../../controllers/project/update-project')
const { patchProject } = require('../../controllers/project/patch-project')
const { deleteProject } = require('../../controllers/project/delete-project')

const projectValidationMiddleware = require('../../middlewares/validation/project/projectValidation')

routerProject
  .post('/', projectValidationMiddleware, addProject)
  .put('/:id', updateProject)
  .patch('/:id', patchProject)
  .delete('/:id', deleteProject)

module.exports = routerProject
