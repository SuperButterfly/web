const { Router } = require('express')
const routerProject = Router()

const { addProject } = require('../../controllers/project/add-project')
const { updateProject } = require('../../controllers/project/update-project')
const { patchProject } = require('../../controllers/project/patch-project')
const { deleteProject } = require('../../controllers/project/delete-project')
const validatePageMiddleware = require('../../middlewares/validation/page/pageValidation')

routerProject
  .post('/', validatePageMiddleware, addProject)
  .put('/:id', updateProject)
  .patch('/:id', patchProject)
  .delete('/:id', deleteProject)

module.exports = routerProject
