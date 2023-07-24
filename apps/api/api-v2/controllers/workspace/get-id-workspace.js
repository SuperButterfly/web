const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getIdWorkSpace = async (req, res, next) => {
  const { id } = req.params
  const workspace = await models.UserModel.findByPk(id)
  if (!workspace) throw new ClientError('Error not found workspace', 400)
  response(res, 200, workspace)
}

module.exports = { getIdWorkSpace: catchedAsync(getIdWorkSpace) }
