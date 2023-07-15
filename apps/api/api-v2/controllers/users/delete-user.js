const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')

const deleteUser = async (req, res, next) => {
  const { id } = req.params
  const user = await models.UserModel.findOne({ where: { id } })
  if (!user) {
    throw new ClientError('User Not Found', 404)
  }
  await user.update({ isDeleted: 'true' })
  response(res, 201, user)
}

module.exports = { deleteUser: catchedAsync(deleteUser) }
