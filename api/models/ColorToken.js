const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
  sequelize.define(
    'ColorToken',
    {
      name: {
        type: DataTypes.STRING,
        required: true,
        unique: true
      },
      color: {
        type: DataTypes.STRING,
        required: true
      }
    },
    {
      timestamps: false
    }
  )
