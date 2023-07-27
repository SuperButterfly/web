const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')
const { cloneChild } = require('../../utils/helpers/cloneChild')

const cloneComponent = async (req, res) => {
  const { id } = req.params

  const componentFinded = await models.ComponentModel.findOne({
    where: { id },
    attributes: [
      'projectId',
      'pageId',
      'parentId',
      'tag',
      'order',
      'attributes',
      'nativeAttributes',
      'isShow'
    ]
  })

  if (!componentFinded) throw new ClientError('Error not found component', 400)

  const componentParent = await models.ComponentModel.findAll({
    where: { parentId: id }
  })

  if (componentParent.length) {
    cloneChild(componentParent)
  }
  const dataValues = componentFinded.dataValues

  const clone = await models.ComponentModel.create({
    projectId: dataValues.projectId,
    pageId: dataValues.pageId,
    parentId: dataValues.parentId,
    tag: dataValues.tag,
    order: dataValues.order,
    attributes: dataValues.attributes,
    nativeAttributes: dataValues.nativeAttributes,
    isShow: dataValues.isShow
  })
  response(res, 200, clone)
}

module.exports = { cloneComponent: catchedAsync(cloneComponent) }
