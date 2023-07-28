const { models } = require('../../database/connection/database')

const getOrderNumber = async (parentId) => {
    const component = await models.ComponentModel.findAll({
        where: {
            parentId
        }
      })

      return component.length + 1
}

module.exports = getOrderNumber