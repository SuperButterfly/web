const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
  sequelize.define('UserTool_Project', {
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
