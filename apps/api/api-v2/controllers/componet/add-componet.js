const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')

const addComponet = async (req, res, next) => {
  const { body } = req
  const component = await models.ComponentModal.create(body)
  response(res, 200, component)
}

module.exports = { addComponet: catchedAsync(addComponet) }
