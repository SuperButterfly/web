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
      allowNull: false,
      defaultValue: 'newLayaout'
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ''
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  })
