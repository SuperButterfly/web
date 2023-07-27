const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

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

  const clone = await models.ComponentModel.create({ componentFinded })

  response(res, 200, clone)
}

module.exports = { cloneComponent: catchedAsync(cloneComponent) }
