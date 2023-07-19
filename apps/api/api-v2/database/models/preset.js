const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
  sequelize.define('Preset', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    layout: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: true
    },
    text: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: true
    },
    color: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: true
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  })
