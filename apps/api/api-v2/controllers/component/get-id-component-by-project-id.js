const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getIdComponentByProjectId = async (req, res, next) => {
  const { projectId } = req.params
  console.log('estoy aca')
  const components = await models.ComponentModel.findAll({
    where: { projectId: projectId } // Utilizamos un objeto para la condición de filtrado
  })
  if (!components) throw new ClientError('Error not found component', 400)
  response(res, 200, components)
}

module.exports = {
  getIdComponentByProjectId: catchedAsync(getIdComponentByProjectId)
}
