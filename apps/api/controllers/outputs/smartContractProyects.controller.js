const startonApi = require("../../services/smartContractAxiosInstance")

// Función para obtener la lista de todos los proyectos existentes
async function getAllProjects(page, limit) {
  const url = "/v3/project";

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


// Función para obtener un proyecto específico por su ID
async function getProjectById(id) {
    const url = `/v3/project`;
  
    try {
      const response = await startonApi.get(url);
      console.log("Respuesta:", response.status, response.data);
      // Aquí puedes manejar la respuesta si es necesario
    } catch (error) {
      console.error("Error:", error.response.status, error.response.data);
      // Aquí puedes manejar el error si ocurre
    }
  }

  module.exports ={getProjectById, getAllProjects}

