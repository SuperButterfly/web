const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
  sequelize.define(
    'FontPresset',
    {
      name: {
        type: DataTypes.STRING,
        required: true,
        unique: true
      },
      family: {
        type: DataTypes.STRING,
        required: true
      },
      size: {
        type: DataTypes.STRING
      },
      weight: {
        type: DataTypes.STRING
      }
    },
    {
      timestamps: false
    }
  )
