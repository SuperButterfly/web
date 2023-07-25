const { Router } = require('express')
const contractRouter = Router()

const {
  createProject,
  updateProject,
  deleteProjectById
} = require('../../controllers/inputs/smartContractProyects.controller.js')

contractRouter.post('/', createProject)
contractRouter.patch('/:id', updateProject)
contractRouter.delete('/:id', deleteProjectById)

module.exports = contractRouter
