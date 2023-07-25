const { Router } = require('express')
const watcherRouter = Router()
const {
  createWatcher,
  createWatcherOnManyNetworks,
  updateWatcher,
  deleteWatcherById
} = require('../../controllers/inputs/watcher.controllers.js')

watcherRouter.post('/', createWatcher)
watcherRouter.post('/many-networks', createWatcherOnManyNetworks)
watcherRouter.patch('/:id', updateWatcher)
watcherRouter.delete('/:id', deleteWatcherById)

module.exports = watcherRouter
