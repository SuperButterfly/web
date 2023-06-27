const { Component } = require("../database");
/**
 * Obtiene el ID del componente padre de un componente hijo
 * @param  idChildren
 * @returns parentId
 */
const getParentIdService = async (idChildren) => {
  const hijo = await Component.findByPk(idChildren); // Busca el componente hijo por su ID
  if (!hijo) {
    throw new Error("Componente hijo no encontrado");
  }
  const padre = await hijo.getParent();
  if (!padre) {
    throw new Error("Componente padre no encontrado");
  }
  return padre[0].id;
};

module.exports = { getParentIdService };
