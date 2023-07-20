const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
  sequelize.define('Layaout', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: 'newLayaout'
    },
    value: {
      type: DataTypes.STRING,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  })
