
const { DataTypes } = require('sequelize')

module.exports = (sequelize) =>
  sequelize.define('Component', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: 'Component'
    },
    tag: {
      type: DataTypes.STRING,
      defaultValue: 'div'
    },
    order: {
      type: DataTypes.INTEGER,
      defaultValue: 0
      // autoIncrement: true
    },
    properties: {
      type: DataTypes.JSON,
      defaultValue: {
        style: {},
        mq1600: {},
        mq1200: {},
        mq991: {},
        mq767: {},
        mq479: {},
        states: {},
        event: ''
      }
    },
    attributes: {
      type: DataTypes.JSON,
      defaultValue: {}
    },
    nativeAttributes: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: []
    },
    clases: {
      type: DataTypes.JSON,
      defaultValue: {}
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isshow: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  })
