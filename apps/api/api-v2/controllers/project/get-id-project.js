const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getIdProject = async (req, res, next) => {
  const { id } = req.params

  const project = await models.ProjectModel.findByPk(id)

  if (!project) throw new ClientError('Failed to find project by ID', 404)

  response(res, 200, project)
}

module.exports = { getIdProject: catchedAsync(getIdProject) }
