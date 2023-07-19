const { models } = require('../../database/connection/database')
const bcrypt = require('bcrypt')
const { catchedAsync, response } = require('../../utils/err')
// const { ClientError } = require('../../utils/err/errors')

const addUser = async (req, res, next) => {
  const {
    username,
    email,
    password,
    plan,
    resourceslist,
    theme,
    billingDates
  } = req.body
  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await models.UserModel.create({
    username,
    email,
    password: hashedPassword,
    plan,
    resourceslist,
    theme,
    billingDates
  })
  response(res, 200, user)
}

module.exports = { addUser: catchedAsync(addUser) }
