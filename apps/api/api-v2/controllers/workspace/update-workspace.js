const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const updateWorkSpace = async (req, res, next) => {
  const { id } = req.params
  const workSpace = await models.WorkSpaceModel.findOne({ where: { id } })
  if (!workSpace) {
    throw new ClientError('workspace Not Found', 404)
  }
  await workSpace.update(body)
  await workSpace.save()
  response(res, 201, workSpace)
}

module.exports = { updateWorkSpace: catchedAsync(updateWorkSpace) }
