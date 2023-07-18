const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
  sequelize.define('Datatable', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    row: {
      type: DataTypes.JSONB,
      defaultValue: {
        example: ['example', 'example2']
      }
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
