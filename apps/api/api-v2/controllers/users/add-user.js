const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const addUser = async (req, res, next) => {
  const { username, email, password, plan, resourceslist, theme, billingDates } = req.body

  const user = await models.UserModel.create({ username, email, password, plan, resourceslist, theme, billingDates })
  response(res, 200, user)
}

module.exports = { addUser: catchedAsync(addUser) }
