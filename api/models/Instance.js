const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
  sequelize.define(
    'Instance',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING
      },
      volumeId: {
        type: DataTypes.STRING
      },
      ipID: {
        type: DataTypes.STRING
      },
      ipAddress: {
        type: DataTypes. STRING
      }
    },
    {
      hooks: {
        beforeCreate: (instance, options) => {
          instance.id = options.id
          instance.name = options.name || 'New Instance'
          instance.volumeId = options.volumeId
          instance.ipID = options.ipID
          instance.ipAddress = options.ipAddress
        }
      }
    }
  )
