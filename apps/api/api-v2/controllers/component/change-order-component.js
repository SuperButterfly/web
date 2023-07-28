const { Op } = require('sequelize')
const { models,db } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const changeOrderComponent = async (req,res)=>{
  const { childId, newPosition } = req.body // Recibir el identificador del hijo y la nueva posición desde el cliente
  // Obtener los datos del hijo a mover
  const child = await models.ComponentModel.findByPk(childId)

  if (!child) {
    throw new ClientError('El hijo no existe.', 400)
  }

  const transaction = await db.transaction()

  const parentId = child.parentId
  const maxOrder = await models.ComponentModel.max('order', {
    where: { parentId },
    transaction,
  })

  // Validar que la nueva posición esté dentro del rango válido
  if (newPosition < 1 || newPosition > maxOrder) {
    throw new ClientError('La nueva posición no es válida.', 400)
  }
  // Si la nueva posición es igual al orden actual, no se necesita hacer nada
  if (newPosition === child.order) {
    await transaction.rollback() // Hacer rollback de la transacción antes de enviar la respuesta exitosa
    return response(res, 200 ,'El hijo se encuentra en la posición deseada.')
  }
  // Reorganizar los números de orden de los hijos entre las posiciones afectadas
  const affectedChildren = await models.ComponentModel.findAll({
    where: {
      parentId,
      order: {
        [Op.between]: [Math.min(child.order, newPosition), Math.max(child.order, newPosition)],
      },
      id: { [Op.not]: childId },
    },
    transaction,
  })

  for (const affectedChild of affectedChildren) {
    if (affectedChild.id !== childId) {
      await affectedChild.update(
        {
          order: affectedChild.order + (newPosition > child.order ? -1 : 1),
        },
        { transaction }
      )
    }
  }
  // Mover el hijo a la nueva posición
  await child.update({ order: newPosition }, { transaction })

  await transaction.commit()
  // Enviar una respuesta exitosa al cliente
  return response(res, 200,'El hijo se movió exitosamente.')
}


module.exports = { changeOrderComponent: catchedAsync(changeOrderComponent) }