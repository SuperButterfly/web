const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

// const deletedRecursivo = (id) => {
//
// }

const deleteMultiComponent = async (req, res, next) => {
  const { toDeletes } = req.body

  await Promise.all(
    toDeletes.map(async (element) => {
      // Rastrea el componente segun la iteracion del array pasado
      const component = await models.ComponentModel.findOne({
        where: { id: element.id }
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
      // Los deletea
      await component.update({ isDeleted: true })
    })
  )

  response(res, 201, toDeletes)
}

module.exports = { deleteMultiComponent: catchedAsync(deleteMultiComponent) }
