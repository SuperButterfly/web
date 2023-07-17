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
      allowNull: false,
      defaultValue: 'newPage'
    },
    components: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: false
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  })
