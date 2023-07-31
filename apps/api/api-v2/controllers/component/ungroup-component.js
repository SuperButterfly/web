const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const ungroupComponent = async (req, res) =>  {
    const { groupId } = req.body

    const groupComponent = await models.ComponentModel.findByPk(groupId)
    if (!groupComponent) {
      throw new ClientError('Group component not found')
    }

    const parentID = groupComponent.parentId
    const parentComponent = await models.ComponentModel.findByPk(parentID)
    if (!parentComponent) {
      throw new ClientError('Parent component not found')
    }

    const childComponents = await groupComponent.getChildren()
    if (childComponents.length === 0) {
      throw new ClientError('this group component has no child')
    }

    await Promise.all(
      childComponents.map(async (childComponent) => {
        await parentComponent.addChild(childComponent)
        await childComponent.setParent(parentComponent)
      })
    )

    await groupComponent.destroy()


    response(res, 200, parentComponent)
}

module.exports = { ungroupComponent: catchedAsync(ungroupComponent) }