const { DataTypes } = require('sequelize')
const Template = require('./Template')

module.exports = (sequelize) =>
  sequelize.define('Pressets', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    templateId: {
      type: DataTypes.UUID,
      allowNull: false
    },
    color: {
      type: DataTypes.JSONB,
      allowNull: false
    },
    layout: {
      type: DataTypes.JSONB,
      allowNull: false
    },
    text: {
      type: DataTypes.JSONB,
      allowNull: false
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  })
