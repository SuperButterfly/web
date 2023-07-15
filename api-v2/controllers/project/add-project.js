const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const addProject = async (req, res, next) => {
  const body = req.body

  const newProject = await models.ProjectModel.create(body)

  if (!newProject) throw new ClientError('Erro al crear el project', 400)

  response(res, 200, newProject)
}

module.exports = { addProject: catchedAsync(addProject) }
