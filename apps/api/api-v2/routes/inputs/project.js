const { Router } = require('express')
const routerProject = Router()

const { addProject } = require('../../controllers/project/add-project')
const { updateProject } = require('../../controllers/project/update-project')
const { patchProject } = require('../../controllers/project/patch-project')
const { deleteProject } = require('../../controllers/project/delete-project')

routerProject.post('/', addProject)

routerProject.put('/:id', updateProject)

routerProject.patch('/:id', patchProject)

routerProject.delete('/:id', deleteProject)

module.exports = routerProject