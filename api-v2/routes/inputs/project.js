const { Router } = require('express')
const projectRouter = Router()

const { addProject } = require('../../controllers/project/add-project')
const { updateProject } = require('../../controllers/project/update-project')
const { modifyProject } = require('../../controllers/project/patch-project')
const { deleteProject } = require('../../controllers/project/delete-project')

projectRouter.post('/', addProject)

projectRouter.put('/:id', updateProject)

projectRouter.patch('/:id', modifyProject)

projectRouter.delete('/:id', deleteProject)

module.exports = projectRouter
