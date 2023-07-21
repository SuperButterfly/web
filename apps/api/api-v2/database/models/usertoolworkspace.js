const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
  sequelize.define('UserTool_WorkSpace', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
