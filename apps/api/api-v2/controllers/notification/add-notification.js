const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')

const addNotification = async (req, res, next) => {
  const { body } = req
  const notification = await models.NotificationModel.create(body)
  response(res, 200, notification)
}

module.exports = { addNotification: catchedAsync(addNotification) }
