const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const deleteProject = async (req, res, next) => {
  const { id } = req.params

  const project = await models.ProjectModel.findByPk(id)

  if (!project) throw new ClientError('Erro al encontrar el project', 400)

  await models.ProjectModel.update({ isDeleted: true }, { where: { id: id } })

  const projectDisable = await models.ProjectModel.findByPk(id)

  response(res, 200, projectDisable)
}

module.exports = { deleteProject: catchedAsync(deleteProject) }
