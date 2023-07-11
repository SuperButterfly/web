const { DataTypes } = require('sequelize')
const Template = require('./Template')

module.exports = (sequelize) =>
  sequelize.define('Pressets', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    color: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: {}
    },
    layout: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: {}
    },
    text: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: {}
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })
