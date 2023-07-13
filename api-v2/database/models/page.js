const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
  sequelize.define('Page', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    components: {
      type: DataTypes.JSONB,
      allowNull: false
    }
  })
