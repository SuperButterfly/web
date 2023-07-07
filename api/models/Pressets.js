const { DataTypes } = require("sequelize");
const Template = require("./Template");

module.exports = (sequelize) =>
  sequelize.define("Pressets", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    templateId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Template, // Nombre del modelo "Template"
        key: "id", // Nombre de la columna que será la clave foránea en el modelo "Pressets"
      },
    },
    color: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    layout: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    text: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
