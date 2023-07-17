const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const patchNotification = catchedAsync(async (req, res, next) => {
  const { id } = req.params
  const body = req.body

  const notification = await models.NotificationModel.findByPk(id)

  if (!notification) {
    throw new ClientError('Notification Not Found', 404)
  }

  await notification.update(body, { fields: Object.keys(body) })

  response(res, 200, 'Notification updated successfully', notification)
})

module.exports = { patchNotification: catchedAsync(patchNotification) }
