const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getIdComponentByProjectId = async (req, res, next) => {
  const { projectId } = req.params
  const components = await models.ComponentModel.findAll({
    where: { projectId: projectId, tag: 'body' },
    attributes: ['id']
  })

  if (!components) throw new ClientError('Error not found component', 404)

  // Obtener el id del componente principal (padre)
  const { id: parentId } = components[0]

  // esta funcion se va modularizar futuramente
  const getComponentHierarchy = async (parentId) => {
    const parentComponent = await models.ComponentModel.findOne({
      where: { id: parentId }
    })

    const hierarchicalData = {
      ...parentComponent.dataValues,
      children: {}
    }

    const childrenComponents = await models.ComponentTreeModel.findAll({
      where: { parentId },
      attributes: ['childId']
    })

    for (const childComponent of childrenComponents) {
      const { childId } = childComponent
      hierarchicalData.children[childId] = await getComponentHierarchy(childId)
    }

    return hierarchicalData
  }

  const hierarchicalData = await getComponentHierarchy(parentId)

  response(res, 200, hierarchicalData)
}

module.exports = {
  getIdComponentByProjectId: catchedAsync(getIdComponentByProjectId)
}
