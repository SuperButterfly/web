const { models } = require('../../database/connection/database')
const { catchedAsync } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const deleteChild = async (elements) => {
  await Promise.all(
    elements.map(async (element) => {
      const componentId = element.dataValues.id

      // Realiza la búsqueda en la tabla de componentes
      const component = await models.ComponentModel.findOne({
        where: { id: componentId }
      })

      // Si no encuentra uno, corta
      if (!component) {
        throw new ClientError('Component Not Found', 404)
      }

      // Si uno tiene como tag 'body', corta
      if (component.tag === 'body') {
        throw new ClientError(
          {
            component,
            message: 'Error to delete component with "body" tag'
          },
          400
        )
      }

      // Verifica si tiene hijos
      const children = await models.ComponentModel.findAll({
        where: { parentId: componentId }
      })

      // Si tiene hijos, ejecuta la función recursiva para eliminarlos primero
      if (children.length) {
        await deleteChild(children)
      }

      // Elimina el componente actual
      const deleted = await component.update({ isDeleted: true })
      return deleted
    })
  )
}

module.exports = { deleteChild: catchedAsync(deleteChild) }
