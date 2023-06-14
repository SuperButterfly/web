'use stric';
const { DataTypes } = require("sequelize");

module.exports = sequelize => sequelize.define('Notification', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  type: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  message: {
    type: DataTypes.STRING,
    defaultValue: ''
  },
  workspace:  {
    type: DataTypes.STRING,
    defaultValue: ''
  }, 
  isDeleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  isRead: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});
