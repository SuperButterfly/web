const { Router } = require('express')
const relayerRouter = Router()

const {
  updateRelayerSettingsForProject
} = require('../../controllers/inputs/relayer.controllers.js')

relayerRouter.patch('/:network', updateRelayerSettingsForProject)

module.exports = relayerRouter
