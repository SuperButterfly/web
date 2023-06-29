const { DataTypes } = require('sequelize');

module.exports = sequelize => sequelize.define('Instance', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    defaultValue: 'New Instance'
  },
  TemplateId: {
    type: DataTypes.UUIDV4,
    allowNull: false,
    references: {
      model: 'Templates', // Nombre de la tabla de templates en la base de datos
      key: 'id', // Nombre de la columna de referencia en la tabla de templates
    },
  },
}, {
  hooks: {
    beforeCreate: (instance, options) => {
      instance.id = options.id;
      instance.name = options.name;
    }
  }
});
