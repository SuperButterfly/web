const { Router } = require('express')
const routerProject = Router()

const { getAllProject } = require('../../controllers/project/get-all-project')
const { getIdProject } = require('../../controllers/project/get-id-project')
const { getAllProjectByRol } = require('../../controllers/project/get-all-project-by-rol')
const { getAllProjectByWorkSpace } = require('../../controllers/project/get-all-project-by-workspace')

routerProject.get('/', getAllProject).get('/getbyworkspace/:id', getAllProjectByWorkSpace).get('/getbyrol/:id', getAllProjectByRol).get('/:id', getIdProject)

module.exports = routerProject
