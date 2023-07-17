const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getIdNotification = async (req, res, next) => {
  const { id } = req.params
  const notification = await models.NotificationModel.findByPk(id)
  if (!notification) throw new ClientError('Error not found Notification', 400)
  response(res, 200, notification)
}

module.exports = { getIdNotification: catchedAsync(getIdNotification) }
