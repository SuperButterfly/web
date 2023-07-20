const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
  sequelize.define('Preset', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  })
