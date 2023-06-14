'use stric';
const { DataTypes } = require("sequelize");

module.exports = sequelize => sequelize.define('Folder', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  folderName: {
    type: DataTypes.STRING,
    defaultValue: 'New folder'
  }, 
  isDeleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});
