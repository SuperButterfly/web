const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getIdComponent = async (req, res, next) => {
  const { id } = req.params

  const componentFinded = await models.ComponentModel.findByPk(id)

  if (!componentFinded) throw new ClientError('Error not found component', 400)

  const cssClassFinded = await models.CssClassModel.findOne({
    where: { name: componentFinded.tag }
  })

  if (!cssClassFinded)
    throw new ClientError('Error not found cssClass', 200, componentFinded)

  const component = {
    id: componentFinded.id,
    tag: componentFinded.tag,
    order: componentFinded.order,
    attributes: componentFinded.attributes,
    nativeAttributes: componentFinded.nativeAttributes,
    isShow: componentFinded.isShow,
    isDeleted: componentFinded.isDeleted
  }

  const cssClass = {
    id: cssClassFinded.id,
    name: cssClassFinded.name,
    style: cssClassFinded.style,
    isDeleted: cssClassFinded.isDeleted
  }

  response(res, 200, { component, cssClass })
}

module.exports = { getIdComponent: catchedAsync(getIdComponent) }
