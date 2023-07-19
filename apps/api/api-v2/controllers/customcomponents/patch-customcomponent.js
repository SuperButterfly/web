const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const patchCustomComponent = catchedAsync(async (req, res, next) => {
  const { id } = req.params
  const { body } = req

  const custom = await models.CustomComponentModel.findOne({ where: { id } })

  if (!custom) {
    throw new ClientError('Custom component not found', 404)
  }

  await custom.update(body, { fields: Object.keys(body) })

  await custom.save()

  response(res, 200, 'Custom component updated successfully', custom)
})

module.exports = { patchCustomComponent: catchedAsync(patchCustomComponent) }
