const startonApi = require("../../services/smartContractAxiosInstance")


// Ejemplo de cómo llamar a la función con algunos parámetros de consulta
//   const queryParameters = {
//     page: 1,
//     limit: 10,
//     isAudited: true,
//     isActivated: true,
//     name: 'templateName',
//     includeCompilationDetails: true,
//   };

async function getLibraries(queryParameters) {
  const url = '/v3/smart-contract-template'

  try {
    const response = await startonApi.get(url, {
      params: queryParameters
    })
    console.log('Respuesta:', response.status, response.data)
    return response.data // Retorna los datos recibidos
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    throw error // Lanza el error para que sea manejado por el llamador de la función
  }
}


async function getLibraryById(id, queryParameters) {
  const url = `/v3/smart-contract-template/`;

  try {
    const response = await startonApi.get(url, {
      params: queryParameters
    });
    console.log('Respuesta:', response.status, response.data);
    return response.data; // Retorna los datos recibidos
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data);
    if (error.response.status === 404) {
      throw new Error('Plantilla de contrato inteligente no encontrada.');
    } else {
      throw error; // Lanza el error para que sea manejado por el llamador de la función
    }
  }
}

module.exports = { getLibraries, getLibraryById }
