const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getAllWorkSpace = async (req, res, next) => {
  const workspaces = await models.WorkSpaceModel.findAll()
  if (!workspaces) throw new ClientError('Error al traer los workspaces', 400)
  response(res, 200, workspaces)
}

module.exports = { getAllWorkSpace: catchedAsync(getAllWorkSpace) }
