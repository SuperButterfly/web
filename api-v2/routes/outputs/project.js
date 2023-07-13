const { Router } = require('express')
const projectRouter = Router()

const { getAllProjects } = require('../../controllers/project/get-project-all')
const { getProjectById } = require('../../controllers/project/get-project-id')

projectRouter.get('/all', getAllProjects)

projectRouter.get('/:id', getProjectById)

module.exports = projectRouter
