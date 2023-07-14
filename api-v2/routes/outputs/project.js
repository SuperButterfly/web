const { Router } = require('express')
const routerProject = Router()

const { getAllProjects } = require('../../controllers/project/get-all-project')
const { getProjectById } = require('../../controllers/project/get-id-project')

routerProject.get('/all', getAllProjects)

routerProject.get('/:id', getProjectById)

module.exports = routerProject
