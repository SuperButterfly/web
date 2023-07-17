const { Router } = require('express')
const routerProject = Router()

const { getAllProject } = require('../../controllers/project/get-all-project')
const { getIdProject } = require('../../controllers/project/get-id-project')

routerProject.get('/', getAllProject).get('/:id', getIdProject)

module.exports = routerProject
