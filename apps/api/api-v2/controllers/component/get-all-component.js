const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

// Función recursiva para obtener todos los hijos de un componente
async function getChildrenRecursively(componentId) {
  const children = await models.ComponentModel.findAll({
    where: {
      parentId: componentId
    },
    include: {
      model: models.PropertyModel,
      as: 'Property', // Alias para acceder a la propiedad del componente
    },
  })

  const childrenWithGrandchildren = []
  for (const child of children) {
    const grandchildren = await getChildrenRecursively(child.id)
    childrenWithGrandchildren.push({
      ...child.dataValues,
      children: grandchildren
    })
  }

  return childrenWithGrandchildren
}

const getAllComponents = async (req, res, next) => {
  const { id } = req.params

  const page = await models.PageModel.findOne({ where: { id } })

  if (!page) {
    throw new ClientError('Error not found page', 400)
  }

  const bodyComponent = await models.ComponentModel.findOne({
    where: {
      pageId: id,
      tag: 'body'
    },
    include: {
      model: models.PropertyModel,
      as: 'Property', // Alias para acceder a la propiedad del componente
    },
  })

  if (!bodyComponent) {
    throw new ClientError('Error not found body component', 404)
  }

  const childrenWithGrandchildren = await getChildrenRecursively(bodyComponent.id)

  const pageWithBodyAndChildren = {
    ...page.dataValues,
    body: bodyComponent.dataValues,
    children: childrenWithGrandchildren
  }

  response(res, 200, pageWithBodyAndChildren)
}

module.exports = {getAllComponents: catchedAsync(getAllComponents )}