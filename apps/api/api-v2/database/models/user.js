const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
  sequelize.define('UserTool', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      required: true,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      required: true
    },
    plan: {
      type: DataTypes.ENUM,
      values: ['Free', 'Pro', 'Premmiun'],
      defaultValue: 'Free'
    },
    resourcesList: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      defaultValue: () => []
    },
    theme: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    billingDates: {
      type: DataTypes.JSON,
      defaultValue: {}
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
