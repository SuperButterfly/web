const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const addLayaout = async (req, res, next) => {
  const { name, value, presetId, ProjectId } = req.body

  const preset = await models.PresetModel.findByPk(presetId)

  if (!preset) throw new ClientError('Error not found preset', 400)

  const project = await models.ProjectModel.findByPk(ProjectId)

  if (!project) throw new ClientError('Error not found project', 400)

  const newLayaout = await models.LayaoutModel.create({ name, value, presetId })

  if (!newLayaout) throw new ClientError('Error to create layaout', 400)

  response(res, 200, newLayaout)
}

module.exports = { addLayaout: catchedAsync(addLayaout) }
