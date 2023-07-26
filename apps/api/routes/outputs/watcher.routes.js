const { Router } = require('express')
const watcherRouter = Router()

const {
  getAllWatchers,
  getWatcherById,
  getWatcherEvents,
  getEventForWatcher
} = require('../../controllers/outputs/watcher.controllers')

watcherRouter.get('/', getAllWatchers)
watcherRouter.get('/:id', getWatcherById)
watcherRouter.get('/:id/event', getWatcherEvents)
watcherRouter.get('/:id/event/:eventId', getEventForWatcher)

module.exports = watcherRouter
