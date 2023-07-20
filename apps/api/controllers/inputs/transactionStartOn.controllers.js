const startonApi = require('../../services/smartContractAxiosInstance')

// Datos ejemplo de la nueva transacción en formato JSON para crear la transacción
// const newTransactionData = {
//     data: "string",
//     gasLimit: "string",
//     speed: "low",
//     customGas: {
//       gasPrice: "string",
//       maxFeePerGas: "string",
//       maxPriorityFeePerGas: "string",
//     },
//     metadata: {},
//     network: "string",
//     nonce: 0,
//     signerWallet: "string",
//     to: "string",
//     value: "string",
//   };
async function createTransaction(transactionData) {
  const url = '/v3/transaction'

  try {
    const response = await startonApi.post(url, transactionData)
    console.log('Respuesta:', response.status, response.data)
    return response.data // Retorna los datos recibidos de la nueva transacción
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    if (error.response.status === 400) {
      throw new Error('Solicitud incorrecta.')
    } else if (error.response.status === 401) {
      throw new Error('No autenticado.')
    } else if (error.response.status === 404) {
      throw new Error('No encontrado.')
    } else if (error.response.status === 422) {
      throw new Error('Entidad no procesable.')
    } else if (error.response.status === 500) {
      throw new Error('Error interno del servidor.')
    } else {
      throw error // Lanza el error para que sea manejado por el llamador de la función
    }
  }
}

module.exports = { createTransaction }
