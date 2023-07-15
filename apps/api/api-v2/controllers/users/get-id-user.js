const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getIdUser = async (req, res, next) => {
  const { id } = req.params
  const users = await models.UserModel.findByPk(id)
  if (!users) throw new ClientError('Error al traer el User', 400)
  response(res, 200, users)
}

module.exports = { getIdUser: catchedAsync(getIdUser) }
