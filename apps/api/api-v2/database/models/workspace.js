const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
  sequelize.define('Workspace', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: 'New Workspace'
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: 'New Description'
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
