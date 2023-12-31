const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const updateUser = async (req, res, next) => {
  const { username, email, password, plan, resourceslist, theme, billingDates } = req.body
  const { id } = req.params

  const user = await models.UserModel.findOne({ where: { id } })

  if (!user) {
    throw new ClientError('User Not Found', 404)
  }

  await user.update({ username, email, password, plan, resourceslist, theme, billingDates })

  await user.save()
  
  response(res, 201, user)
}

module.exports = { updateUser: catchedAsync(updateUser) }
