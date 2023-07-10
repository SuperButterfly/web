'use stric'
const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
  sequelize.define('ClassSaved', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    nameClass: {
      type: DataTypes.STRING
    },
    properties: {
      type: DataTypes.JSON,
      defaultValue: {
        style: {},
        mq1600: {},
        mq1200: {},
        mq991: {},
        mq479: {},
        states: {},
        event: ''
      }
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  })
