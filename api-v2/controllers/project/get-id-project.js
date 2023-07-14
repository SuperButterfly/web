const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getIdProject = async (req, res, next) => {
  const { id } = req.params

  const project = await models.ProjectModel.findByPk(id)

  if (!project)
    throw new ClientError('Erro al encontrar el project por ID', 400)

  response(res, 200, project)
}

module.exports = { getIdProject: catchedAsync(getIdProject) }
