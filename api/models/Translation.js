const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
  sequelize.define('Translation', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      required: true
    },
    file: {
      type: DataTypes.BLOB,
      required: true
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
