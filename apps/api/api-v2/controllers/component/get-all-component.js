const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getAllComponents = async (req, res, next) => {
  const { pageId } = req.body

  const page = await models.PageModel.findOne({ where: { id: pageId } })

  if (!page) throw new ClientError('Error not found page', 400)

  const component = await models.ComponentModel.findAll({
    where: {
      pageId
    }
  })

  if (!component) throw new ClientError('Error not found component', 400)
  response(res, 200, component)
}

module.exports = { getAllComponents: catchedAsync(getAllComponents) }
