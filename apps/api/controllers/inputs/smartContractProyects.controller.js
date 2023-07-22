const startonApi = require("../../services/smartContractAxiosInstance")

// Función para crear un nuevo proyecto
async function createProject(projectData) {
  const url = '/v3/project'

  try {
    const response = await startonApi.post(url, projectData)
    console.log('Respuesta:', response.status, response.data)
    // Aquí puedes manejar la respuesta si es necesario
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    // Aquí puedes manejar el error si ocurre
  }
  // Datos del nuevo proyecto en formato JSON para poder crear un proyecto , ejemplo del objeto para la peticion
  // const newProjectData = {
  //   description: "Descripción del proyecto",
  //   name: "Nombre del proyecto",
  //   email: "correo@example.com",
  //   color: "#FFFFFF" // Puedes cambiar esto por el color deseado
  // };
}

// Función para actualizar un proyecto existente
async function updateProject(projectId, projectData) {
  const url = `/v3/project/`

  try {
    const response = await startonApi.patch(url, projectData)
    console.log('Respuesta:', response.status, response.data)
    // Aquí puedes manejar la respuesta si es necesario
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    // Aquí puedes manejar el error si ocurre
  }
  // Datos actualizados del proyecto en formato JSON ejemplo de obejto para la peticion
  //   const updatedProjectData = {
  //     description: "Nueva descripción del proyecto",
  //     name: "Nuevo nombre del proyecto",
  //     email: "nuevo_correo@example.com",
  //     color: "#000000" // Puedes cambiar esto por el color deseado
  //   };
}


// Función para eliminar un proyecto específico por su ID
async function deleteProjectById(id) {
  const url = `/v3/project/`;

  try {
    const response = await startonApi.delete(url);
    console.log("Respuesta:", response.status, response.data);
    // Aquí puedes manejar la respuesta si es necesario
  } catch (error) {
    console.error("Error:", error.response.status, error.response.data);
    // Aquí puedes manejar el error si ocurre
  }
}

module.exports = { createProject, updateProject, deleteProjectById }
