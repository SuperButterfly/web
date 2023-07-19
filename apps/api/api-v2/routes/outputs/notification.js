const { Router } = require('express')
const {
  getAllNotifications
} = require('../../controllers/notification/get-all-notification')
const {
  getIdNotification
} = require('../../controllers/notification/get-id-notification')
const routerNotification = Router()

routerNotification
  .get('/all', getAllNotifications)

  .get('/:id', getIdNotification)

module.exports = routerNotification
