const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const patchWorkSpace = catchedAsync(async (req, res, next) => {
  const { id } = req.params
  const body = req.body

  const user = await models.WorkSpaceModel.findByPk(id)

  if (!user) {
    throw new ClientError('User Not Found', 404)
  }

  await user.update(body, { fields: Object.keys(body) })

  response(res, 200, 'User updated successfully', user)
})

module.exports = { patchWorkSpace: catchedAsync(patchWorkSpace) }
