const { models } = require('../../database/connection/database')
const { catchedAsync } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const cloneChild = async (elements) => {
  // Realiza la busqueda en la tabla de componentes
  await Promise.all(
    elements.map(async (element) => {
      const componentId = element.dataValues.id
      const componentChild = await models.ComponentModel.findOne({
        where: { id: componentId },
        attributes: [
          'projectId',
          'pageId',
          'parentId',
          'tag',
          'order',
          'attributes',
          'nativeAttributes',
          'isShow'
        ]
      })
      // Si no existe tira error
      if (!componentChild) {
        throw new ClientError('Component Not Found', 404)
        // Si existe sigue
      }
      // Verifica si aparece como padre tambien
      const isParent = await models.ComponentModel.findAll({
        where: { parentId: componentId }
      })
      // Si aparece como padre aplica recursividad
      if (isParent.length) {
        await cloneChild(isParent)
      }
      // Si no existe lo crea
      const dataValues = componentChild.dataValues

      const created = await models.ComponentModel.create({
        projectId: dataValues.projectId,
        pageId: dataValues.pageId,
        parentId: dataValues.parentId,
        tag: dataValues.tag,
        order: dataValues.order,
        attributes: dataValues.attributes,
        nativeAttributes: dataValues.nativeAttributes,
        isShow: dataValues.isShow
      })
      return created
    })
  )
}

module.exports = { cloneChild: catchedAsync(cloneChild) }
