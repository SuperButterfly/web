const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const deleteNotification = async (req, res, next) => {
  const { id } = req.params
  const notification = await models.NotificationModel.findOne({ where: { id } })
  if (!notification) {
    throw new ClientError('Notification Not Found', 404)
  }
  await notification.update({ isDeleted: 'true' })
  response(res, 201, notification)
}

module.exports = { deleteNotification: catchedAsync(deleteNotification) }
