const { DataTypes } = require('sequelize');

module.exports = sequelize => sequelize.define('Instance', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
  },
  // state: {
  //   type: DataTypes.ENUM('active', 'deleted')
  // },
}, {
  hooks: {
    beforeCreate: (instance, options) => {
      instance.id = options.id;
      instance.name = options.name || 'New Instance';
    }
  }
});