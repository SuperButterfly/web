const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getAllUsers = async (req, res, next) => {
  const users = await models.UserModel.findAll()
  if (!users) throw new ClientError('Error al traer los users', 400)
  response(res, 200, users)
}

module.exports = { getAllUsers: catchedAsync(getAllUsers) }
