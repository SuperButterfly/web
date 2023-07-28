const { Router } = require('express')
const routerProject = Router()

const { getAllProject } = require('../../controllers/project/get-all-project')
const { getIdProject } = require('../../controllers/project/get-id-project')
const { getAllProjectByRol } = require('../../controllers/project/get-all-project-by-user')

routerProject.get('/', getAllProject).get('/getbyrol/:id', getAllProjectByRol).get('/:id', getIdProject)

module.exports = routerProject
