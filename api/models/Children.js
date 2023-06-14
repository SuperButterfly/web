'use stric';
const { DataTypes } = require("sequelize");

module.exports = sequelize => sequelize.define('Children', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    defaultValue: 'Children'
  },
  tag: {
    type: DataTypes.STRING,
    defaultValue: ''
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
      event: ""
    }
  },
  attributes: {
    type: DataTypes.JSON,
    defaultValue: {}
  },
  clases: {
    type: DataTypes.JSON,
    defaultValue: {}
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});
