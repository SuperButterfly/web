const { Router } = require('express')
const contractRouter = Router()

const {
  getProjectById,
  getAllProjects
} = require('../../controllers/outputs/smartContractProyects.controller.js')

contractRouter.get('/', getAllProjects)
contractRouter.get('/:id', getProjectById)

module.exports = contractRouter
