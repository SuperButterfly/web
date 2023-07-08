const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
  sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      required: true,
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
    resourceslist: {
      type: DataTypes.ARRAY(DataTypes.JSON),
      defaultValue: []
    },
    theme: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
