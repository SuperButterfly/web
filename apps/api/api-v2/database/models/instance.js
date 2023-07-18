const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
  sequelize.define('Instance', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ipAddres: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ipId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    volumneId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  })
