const { models } = require('../../database/connection/database')

const getOrderNumber = async (parent) => {
    const component = await models.ComponentModel.findAll({
        where: {
            parentId: parent.id
        }
      })

      return component.length + 1
}

module.exports = getOrderNumber