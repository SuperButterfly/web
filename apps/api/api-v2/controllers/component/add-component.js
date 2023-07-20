const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')

const addComponet = async (req, res, next) => {
  const { tag, order, attributes, nativeAttributes, isShow, pageId } = req.body

  const component = await models.ComponentModel.create({
    tag,
    order,
    attributes,
    nativeAttributes,
    isShow,
    pageId
  })

  response(res, 200, component)
}

module.exports = { addComponet: catchedAsync(addComponet) }
