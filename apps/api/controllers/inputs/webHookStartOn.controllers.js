
const startonApi = require("../../services/smartContractAxiosInstance")
async function regenerateWebhookSigningSecret(id) {
    const url = '/v3/webhook/signing-secret/regenerate';
  
    try {
      const response = await startonApi.post(url);
      console.log('Respuesta:', response.status, response.data);
      return response.data; // Retorna los datos recibidos
    } catch (error) {
      console.error('Error:', error.response.status, error.response.data);
      if (error.response.status === 400) {
        throw new Error('El ID del proyecto es requerido.');
      } else if (error.response.status === 401) {
        throw new Error('No autenticado.');
      } else {
        throw error; // Lanza el error para que sea manejado por el llamador de la función
      }
    }
  }


  async function resendWebhook(id) {
    const url = `/v3/webhook/${id}/resend`;
  
    try {
      const response = await startonApi.post(url);
      console.log('Respuesta:', response.status, response.data);
      return response.data; // Retorna los datos recibidos
    } catch (error) {
      console.error('Error:', error.response.status, error.response.data);
      if (error.response.status === 400) {
        throw new Error('El ID del proyecto es requerido.');
      } else if (error.response.status === 401) {
        throw new Error('No autenticado.');
      } else if (error.response.status === 404) {
        throw new Error('Webhook no encontrado.');
      } else {
        throw error; // Lanza el error para que sea manejado por el llamador de la función
      }
    }
  }

  async function cancelWebhook(id) {
    const url = `/v3/webhook/${id}/cancel`;
  
    try {
      const response = await startonApi.post(url);
      console.log('Respuesta:', response.status, response.data);
      return response.data; // Retorna los datos recibidos
    } catch (error) {
      console.error('Error:', error.response.status, error.response.data);
      if (error.response.status === 400) {
        throw new Error('El ID del proyecto es requerido.');
      } else if (error.response.status === 401) {
        throw new Error('No autenticado.');
      } else if (error.response.status === 404) {
        throw new Error('Webhook no encontrado.');
      } else {
        throw error; // Lanza el error para que sea manejado por el llamador de la función
      }
    }
  }
  
  

  module.exports ={regenerateWebhookSigningSecret, resendWebhook,cancelWebhook}