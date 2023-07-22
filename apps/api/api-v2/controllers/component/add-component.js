const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')

const addComponet = async (req, res, next) => {
  const {
    tag,
    order,
    attributes,
    nativeAttributes,
    isShow,
    pageId,
    projectId,
    parentId,
    cssClasId
  } = req.body

  const project = await models.ProjectModel.findById(projectId)
  if (!project) return response(res, 404, 'Project not found')

  const component = await models.ComponentModel.create({
    tag,
    order,
    attributes,
    nativeAttributes,
    isShow,
    pageId,
    projectId,
    parentId,
    cssClasId
  })

  response(res, 200, component)
}

module.exports = { addComponet: catchedAsync(addComponet) }
