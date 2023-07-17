const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getAllNotifications = async (req, res, next) => {
  const notification = await models.NotificationModel.findAll()
  if (!notification) throw new ClientError('Error Not found Notification', 400)
  response(res, 200, notification)
}

module.exports = { getAllNotifications: catchedAsync(getAllNotifications) }
