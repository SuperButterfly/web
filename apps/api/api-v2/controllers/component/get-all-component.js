const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')
const getChildrenRecursively = require('../../utils/helpers/getChildrenRecursively')

const getAllComponents = async (req, res, next) => {
  const { id } = req.params

  const page = await models.PageModel.findOne({ where: { id } })

  if (!page) {
    throw new ClientError('Error not found page', 400)
  }

  const bodyComponent = await models.ComponentModel.findOne({
    where: {
      pageId: id,
      tag: 'body'
    },
    include: {
      model: models.PropertyModel,
      as: 'Property', // Alias para acceder a la propiedad del componente
    },
  })

  if (!bodyComponent) {
    throw new ClientError('Error not found body component', 404)
  }

  const childrenWithGrandchildren = await getChildrenRecursively(bodyComponent.id)

  const pageWithBodyAndChildren = {
    ...page.dataValues,
    body: bodyComponent.dataValues,
    children: childrenWithGrandchildren
  }

  response(res, 200, pageWithBodyAndChildren)
}

module.exports = {getAllComponents: catchedAsync(getAllComponents )}