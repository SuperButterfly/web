const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getIdComponent = async (req, res, next) => {
  const { id } = req.params

  const componentFinded = await models.ComponentModel.findByPk(id, {
    include: {
      model: models.PropertyModel,
      as: 'Property', // Alias para acceder a la propiedad del componente
    },
  })
  if (!componentFinded) throw new ClientError('Error not found component', 400)
  
  response(res, 200, componentFinded)
}

module.exports = { getIdComponent: catchedAsync(getIdComponent) }
