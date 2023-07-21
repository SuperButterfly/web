const startonApi = require('../../services/smartContractAxiosInstance');

async function createTransaction(req, res, next) {
  const transactionData = req.body;

  try {
    const url = '/v3/transaction';
    const response = await startonApi.post(url, transactionData);
    console.log('Respuesta:', response.status, response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data);
    if (error.response.status === 400) {
      throw new Error('Solicitud incorrecta.');
    } else if (error.response.status === 401) {
      throw new Error('No autenticado.');
    } else if (error.response.status === 404) {
      throw new Error('No encontrado.');
    } else if (error.response.status === 422) {
      throw new Error('Entidad no procesable.');
    } else if (error.response.status === 500) {
      throw new Error('Error interno del servidor.');
    } else {
      next(error);
    }
  }
}

module.exports = { createTransaction };
