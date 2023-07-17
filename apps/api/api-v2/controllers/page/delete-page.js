const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const deletePage = async (req, res, next) => {
  const { id } = req.params

  const page = await models.PageModel.findOne({ where: { id: id } })

  if (!page) throw new ClientError('Page not found', 404)

  await page.update({ isDeleted: true })

  await page.save()

  response(res, 200, page)
}

module.exports = { deletePage: catchedAsync(deletePage) }
