const { models } = require('../../database/connection/database')
const bcrypt = require('bcrypt')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const addUser = async (req, res, next) => {
  const {
    userName,
    email,
    password,
    plan,
    resourcesList,
    theme,
    billingDates
  } = req.body
  const userByEmail = await models.UserModel.findOne({
    where: { email }
  })
  if (userByEmail) {
    throw new ClientError('Email already exists', 400)
  }

  const userByUserName = await models.UserModel.findOne({
    where: { userName }
  })

  if (userByUserName) {
    throw new ClientError('Username already exists', 400)
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await models.UserModel.create({
    userName,
    email,
    password: hashedPassword,
    plan,
    resourcesList,
    theme,
    billingDates
  })
  response(res, 200, user)
}

module.exports = { addUser: catchedAsync(addUser) }
