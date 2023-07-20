const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const addCustomComponet = async (req, res, next) => {
  const { tag, order, attributes, nativeAttributes, isShow  } = req.body

  const custom = await models.CustomComponentModel.create({ tag, order, attributes, nativeAttributes, isShow  })
  
  if (!custom) throw new ClientError('Error to create custom component', 400)

  response(res, 200, custom)
}

module.exports = { addCustomComponet: catchedAsync(addCustomComponet) }
