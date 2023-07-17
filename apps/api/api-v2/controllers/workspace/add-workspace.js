const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')

const addWorkSpace = async (req, res, next) => {
  const { body } = req

  const workspace = await models.WorkSpaceModel.create(body)
  response(res, 200, workspace)
}

module.exports = { addWorkSpace: catchedAsync(addWorkSpace) }
