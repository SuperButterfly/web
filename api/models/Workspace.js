'use stric'
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
    billingdetails: {
      type: DataTypes.JSON,
      defaultValue: {}
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
