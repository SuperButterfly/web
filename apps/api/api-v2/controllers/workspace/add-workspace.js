const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')

const addWorkSpace = async (req, res, next) => {
  const { name, description } = req.body

  const workspace = await models.WorkSpaceModel.create({ name, description })
  response(res, 200, workspace)
}

module.exports = { addWorkSpace: catchedAsync(addWorkSpace) }
