const { Router } = require('express')
const {
  getDatabaseByProject,
  postDatabaseToProject,
  deleteDatabasesToProjects
} = require('../controllers/database.controller')

const databaseRouter = Router()

databaseRouter.get('/getDatabaseByProject', getDatabaseByProject)

databaseRouter.post('/addDatabasesToProject', postDatabaseToProject)

databaseRouter.patch(
  '/deleteDatabasesToProject/:idProject',
  deleteDatabasesToProjects
)

module.exports = databaseRouter
