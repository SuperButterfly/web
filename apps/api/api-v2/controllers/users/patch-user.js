const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const patchUser = catchedAsync(async (req, res, next) => {
  const { id } = req.params
  const { body } = req

  const user = await models.UserModel.findByPk(id)

  if (!user) {
    throw new ClientError('User Not Found', 404)
  }

  await user.update(body)

  response(res, 200, 'User updated successfully', user)
})

module.exports = { patchUser: catchedAsync(patchUser) }
