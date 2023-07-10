const {
  getConfigById,
  getAllConfig
} = require('../../controllers/outputs/pressets.controllers.js')
const { verifyToken } = require('../../middlewares/auth.js')
const { Router } = require('express')
const pressetsRouter = Router()

pressetsRouter.get('/getPressets', verifyToken, getAllConfig)

pressetsRouter.get('/getPressets/:id', verifyToken, getConfigById)

module.exports = pressetsRouter
