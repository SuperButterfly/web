const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const ClientError = require('../../utils/client-error')

const deleteCustomComponent = async (req, res, next) => {
  const { id } = req.params
  
  const custom = await models.CustomComponentModel.findOne({ where: { id } })
  
  if (!custom) {
    throw new ClientError('Custom component not found', 404)
  }

  await custom.update({ isDeleted: true })

  await custom.save()
  
  response(res, 201, custom)
}

module.exports = { deleteCustomComponent: catchedAsync(deleteCustomComponent) }
