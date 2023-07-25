const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const addComponet = async (req, res) => {
  const {
    tag,
    // order,
    attributes,
    nativeAttributes,
    isShow,
    pageId,
    projectId,
    parentId,
    cssClasId
  } = req.body
  console.log(parentId)

  const project = await models.ProjectModel.findByPk(projectId)
  if (!project) throw new ClientError('Error not found project', 400)

  const page = await models.PageModel.findByPk(pageId)
  if (!page) throw new ClientError('Error not found page', 400)

  const parentComponent = await models.ComponentModel.findByPk(parentId)
  if (!parentComponent) throw new ClientError('Error not found component', 400)

  const parentOrder = parentComponent.order || 0
  const order = parentOrder + 1

  const component = await models.ComponentModel.create({
    tag,
    order,
    attributes,
    nativeAttributes,
    isShow,
    pageId,
    projectId,
    cssClasId
  })

  await models.ComponentTreeModel.create({
    parentId: parentId,
    childId: component.id
  })

  response(res, 200, component)
}

module.exports = { addComponet: catchedAsync(addComponet) }
