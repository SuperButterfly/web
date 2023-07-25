
const startonApi = require("../../services/smartContractAxiosInstance")



// Función para obtener la lista de todos los watchers existentes
async function getAllWatchers(page, limit, address, network, type, webhookUrl, confirmationsBlocks) {
    const url = "/v3/watcher";
  
    // Parámetros de consulta (query parameters) para la solicitud GET
    const params = {
      page, // Índice de la página desde el resultado
      limit, // Máximo número de elementos a devolver (<= 100)
      address, // La dirección del contrato inteligente
      network, // Red en la que están implementados los watchers
      type, // Tipo de eventos observados
      webhookUrl, // URL del webhook
      confirmationsBlocks // Número de bloques de confirmación
    };
  
    try {
      const response = await startonApi.get(url, { params });
      console.log("Respuesta:", response.status, response.data);
      // Aquí puedes manejar la respuesta si es necesario
    } catch (error) {
      console.error("Error:", error.response.status, error.response.data);
      // Aquí puedes manejar el error si ocurre
    }
  }

// Función para obtener un watcher específico por su ID
async function getWatcherById(id) {
    const url = `/v3/watcher/${id}`;
  
    try {
      const response = await startonApi.get(url);
      console.log("Respuesta:", response.status, response.data);
      // Aquí puedes manejar la respuesta si es necesario
    } catch (error) {
      console.error("Error:", error.response.status, error.response.data);
      // Aquí puedes manejar el error si ocurre
    }
  }

  // Función para obtener todos los eventos de un watcher específico
async function getWatcherEvents(id, page, limit) {
    const url = `/v3/watcher/${id}/event`;
  
    // Parámetros de consulta (query parameters) para la solicitud GET
    const params = {
      page, // Índice de la página desde el resultado
      limit // Máximo número de elementos a devolver (<= 100)
    };
  
    try {
      const response = await startonApi.get(url, { params });
      console.log("Respuesta:", response.status, response.data);
      // Aquí puedes manejar la respuesta si es necesario
    } catch (error) {
      console.error("Error:", error.response.status, error.response.data);
      // Aquí puedes manejar el error si ocurre
    }
  }


  // Función para obtener un evento específico de un watcher
async function getEventForWatcher(id, eventId) {
    const url = `/v3/watcher/${id}/event/${eventId}`;
  
    try {
      const response = await startonApi.get(url);
      console.log("Respuesta:", response.status, response.data);
      // Aquí puedes manejar la respuesta si es necesario
    } catch (error) {
      console.error("Error:", error.response.status, error.response.data);
      // Aquí puedes manejar el error si ocurre
    }
  }


  module.exports = {getAllWatchers, getWatcherById, getWatcherEvents, getEventForWatcher};