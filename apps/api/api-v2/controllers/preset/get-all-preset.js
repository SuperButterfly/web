const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getAllPreset = async (req, res, next) => {
  const { ProjectId } = req.body

  const project = await models.ProjectModel.findAll({
    where: {
      id: ProjectId
    }
  })

  if (!project) throw new ClientError('Error not found project', 404)

  const allPreset = await models.PresetModel.findAll({
    where: {
      ProjectId
    }
  })

  if (!allPreset) throw new ClientError('Error fetching the presets', 404)

  response(res, 200, allPreset)
}

module.exports = { getAllPreset: catchedAsync(getAllPreset) }
