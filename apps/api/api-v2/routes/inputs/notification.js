const { Router } = require('express')
const {
  addNotification
} = require('../../controllers/notification/add-notification')
const {
  updateNotification
} = require('../../controllers/notification/update-notification')
const {
  patchNotification
} = require('../../controllers/notification/patch-notification')
const {
  deleteNotification
} = require('../../controllers/notification/delete-notification')
const routerNotification = Router()

routerNotification
  .post('/', addNotification)

  .put('/:id', updateNotification)

  .patch('/:id', patchNotification)

  .delete('/:id', deleteNotification)

module.exports = routerNotification
