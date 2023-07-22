const startonApi = require('../../services/smartContractAxiosInstance')

async function getAllTransactions(queryParameters) {
    const url = '/v3/transaction';
  
    try {
      const response = await startonApi.get(url, {
        params: queryParameters
      });
      console.log('Respuesta:', response.status, response.data);
      return response.data; // Retorna los datos recibidos de todas las transacciones
    } catch (error) {
      console.error('Error:', error.response.status, error.response.data);
      if (error.response.status === 400) {
        throw new Error('Solicitud incorrecta.');
      } else if (error.response.status === 401) {
        throw new Error('No autenticado.');
      } else {
        throw error; // Lanza el error para que sea manejado por el llamador de la función
      }
    }
  }

  async function getTransactionById(id) {
    const url = `/v3/transaction`;
  
    try {
      const response = await startonApi.get(url);
      console.log('Respuesta:', response.status, response.data);
      return response.data; // Retorna los datos recibidos de la transacción específica
    } catch (error) {
      console.error('Error:', error.response.status, error.response.data);
      if (error.response.status === 401) {
        throw new Error('No autenticado.');
      } else if (error.response.status === 404) {
        throw new Error('Transacción no encontrada.');
      } else {
        throw error; // Lanza el error para que sea manejado por el llamador de la función
      }
    }
  }
  

  module.exports = {getAllTransactions,getTransactionById}