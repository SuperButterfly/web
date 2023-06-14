const { DataTypes } = require("sequelize");

module.exports = sequelize => sequelize.define('PressetsGroups', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  }
}, {
  timestamps: false
});
