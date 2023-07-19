const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')

const addUser = async (req, res, next) => {
  const { body } = req

  const user = await models.UserModel.create(body)
  response(res, 200, user)
}

module.exports = { addUser: catchedAsync(addUser) }
