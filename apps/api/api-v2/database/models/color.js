const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
  sequelize.define('Color', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  })
