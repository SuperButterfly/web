const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
  sequelize.define('CustomComponent', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    tag: {
      type: DataTypes.STRING,
    },
    order: {
      type: DataTypes.INTEGER
      // allowNull: false,
    },
    attributes: {
      type: DataTypes.JSONB,
      defaultValue: {}
    },
    nativeAttributes: {
      type: DataTypes.JSONB,
      defaultValue: {}
    },
    isShow: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  })
