const { Router } = require('express')
const routerProject = Router()

const { addProject } = require('../../controllers/project/add-project')
const { updateProject } = require('../../controllers/project/update-project')
const { patchProject } = require('../../controllers/project/patch-project')
const { deleteProject } = require('../../controllers/project/delete-project')
const { setUserToProject } = require('../../controllers/project/set-user-to-project')
const validatePageMiddleware = require('../../middlewares/validation/page/pageValidation')

const projectValidationMiddleware = require('../../middlewares/validation/project/projectValidation')

routerProject
  // comentado por conflictos, y por que las dos hacen lo mismo llegue a un acuerdo para dejar una y borrar la otra.
  // .post('/', validatePageMiddleware, addProject
  .post('/', projectValidationMiddleware, addProject)
  .post('/setuser', setUserToProject)
  .put('/:id', updateProject)
  .patch('/:id', patchProject)
  .delete('/:id', deleteProject)

module.exports = routerProject
