const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  return sequelize.define('ComponentTree', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    parentId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    childId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
}
