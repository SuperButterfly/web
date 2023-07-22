const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const patchComponent = catchedAsync(async (req, res, next) => {
  const { id } = req.params
  const { body } = req

  const component = await models.ComponentModel.findByPk(id)

  if (!component) {
    throw new ClientError('Component Not Found', 404)
  }

  await component.update(body, { fields: Object.keys(body) })

  response(res, 200, 'Component updated successfully', component)
})

module.exports = { patchComponent: catchedAsync(patchComponent) }
