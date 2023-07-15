const { Router } = require('express')
const routerProject = Router()

const { getAllProject } = require('../../controllers/project/get-all-project')
const { getIdProject } = require('../../controllers/project/get-id-project')

routerProject.get('/all', getAllProject)

routerProject.get('/:id', getIdProject)

module.exports = routerProject
