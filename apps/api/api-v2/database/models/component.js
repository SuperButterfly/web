const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
  sequelize.define('Component', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    tag: {
      type: DataTypes.STRING,
    },
    order: {
      type: DataTypes.INTEGER
      // allowNull: false,
    },
    attributes: {
      type: DataTypes.JSONB,
      defaultValue: {}
    },
    nativeAttributes: {
      type: DataTypes.JSONB,
      defaultValue: {}
    },
    isShow: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },parentId: {
      type: DataTypes.UUID,
      references: {
        model: 'Components', // Name of the target model (same model as the current one)
        key: 'id', // Key in the target model that we're referencing
      },
      allowNull: true, // Components can have a parent (except for the root component)
      onDelete: 'CASCADE', // If a parent component is deleted, its children should be deleted as well
    }
  })
