const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
  sequelize.define('Project', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'newProject',
      unique: true
    },
    pages: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: false
    },
    components: {
      type: DataTypes.ARRAY(DataTypes.JSONB),
      allowNull: false
    },
    pre_sets: {
      type: DataTypes.JSONB,
      allowNull: false
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  })
