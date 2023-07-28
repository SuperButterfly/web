const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')
const { deleteChild } = require('../../utils/helpers/deleteChild')

const deleteMultiComponent = async (req, res, next) => {
  const { toDeletes } = req.body

  await Promise.all(
    toDeletes.map(async (element) => {
      // Rastrea el componente segun la iteracion del array pasado
      const component = await models.ComponentModel.findOne({
        where: { id: element }
      })
      // Si no encuentra uno corta
      if (!component) {
        throw new ClientError('Component Not Found', 404)
      }
      // Si uno tiene como tag 'body' corta
      if (component.tag === 'body') {
        throw new ClientError(
          {
            component,
            message: 'Error to delete component with "body" tag'
          },
          400
        )
      }
      // Verifica si aparece como padre
      const componentParent = await models.ComponentModel.findAll({
        where: { parentId: element }
      })
      // Si existe ejecuta la funcion recursiva
      if (componentParent.length) {
        deleteChild(componentParent)
      } else {
        // Los deletea
        await component.update({ isDeleted: true })
      }
    })
  )

  response(res, 201, 'Componentes desactivados')
}

module.exports = { deleteMultiComponent: catchedAsync(deleteMultiComponent) }
