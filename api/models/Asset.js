'use stric';
const { DataTypes } = require("sequelize");

module.exports = sequelize => sequelize.define('Asset', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  assetUrl: {
    type: DataTypes.STRING
  }, 
  isDeleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
})
