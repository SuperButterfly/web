const { Router } = require('express')
const relayerRouter = Router()

const {
  getRelayerSettingsForProject
} = require('../../controllers/outputs/relayer.controllers.js')

relayerRouter.get('/:network', getRelayerSettingsForProject)

module.exports = relayerRouter
