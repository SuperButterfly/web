const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getAllComponents = async (req, res, next) => {
  const { id } = req.id

  const page = await models.PageModel.findOne({ where: { id } })

  if (!page) throw new ClientError('Error not found page', 400)

  const component = await models.ComponentModel.findAll({
    where: {
      pageId: id
    }
  })

  if (!component) throw new ClientError('Error not found component', 400)
  response(res, 200, component)
}

module.exports = { getAllComponents: catchedAsync(getAllComponents) }
