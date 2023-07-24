const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const addNotification = async (req, res, next) => {
  const { message, userToolId } = req.body
  console.log(userToolId)
  const users = await models.UserModel.findByPk(userToolId)
  if (!users) throw new ClientError('Error not found user', 400)

  const notification = await models.NotificationModel.create({
    message,
    userToolId
  })
  response(res, 200, notification)
}

module.exports = { addNotification: catchedAsync(addNotification) }
