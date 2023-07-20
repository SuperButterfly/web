const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const updateCustomComponent = async (req, res, next) => {
  const { tag, order, attributes, nativeAttributes, isShow  } = req.body
  const { id } = req.params

  const custom = await models.CustomComponentModel.findOne({ where: { id } })

  if (!custom) {
    throw new ClientError('Custom component not found', 404)
  }

  await custom.update({ tag, order, attributes, nativeAttributes, isShow  })

  await custom.save()

  response(res, 201, custom)
}

module.exports = { updateCustomComponent: catchedAsync(updateCustomComponent) }
