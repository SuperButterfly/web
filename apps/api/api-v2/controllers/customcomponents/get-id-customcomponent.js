const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getIdCustomComponent = async (req, res, next) => {
  const { id } = req.params

  const custom = await models.CustomComponentModel.findByPk(id)

  if (!custom) throw new ClientError('Error not found custom component', 400)
  
  response(res, 200, custom)
}

module.exports = { getIdCustomComponent: catchedAsync(getIdCustomComponent) }
