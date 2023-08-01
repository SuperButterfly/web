const { models } = require('../../database/connection/database')

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

module.exports =  getChildrenRecursively 