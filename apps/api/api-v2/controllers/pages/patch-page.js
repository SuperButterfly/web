const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const patchPage = async (req, res, next) => {
  const { id } = req.params
  const body = req.body

  const page = await models.PageModel.findOne({ where: { id } })

  if (!page) throw new ClientError('Page not found', 404)

  await page.update(body)

  const pageUpdated = await models.PageModel.findOne({ where: { id } })

  response(res, 200, pageUpdated)
}

module.exports = { patchPage: catchedAsync(patchPage) }
