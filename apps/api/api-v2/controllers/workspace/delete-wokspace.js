const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const deleteWorkSpace = async (req, res, next) => {
  const { id } = req.params
  const workspace = await models.WorkSpaceModel.findOne({ where: { id } })
  if (!workspace) {
    throw new ClientError('Workspace Not Found', 404)
  }
  await workspace.update({ isDeleted: 'true' })
  response(res, 201, workspace)
}

module.exports = { deleteWorkSpace: catchedAsync(deleteWorkSpace) }
