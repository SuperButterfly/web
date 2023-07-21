const startonApi = require('../../services/smartContractAxiosInstance');

async function getGasPrice(network) {
  const url = `/v3/data/${network}/gas-price`;

  try {
    const response = await startonApi.get(url);
    console.log('Respuesta:', response.status, response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data);
    if (error.response.status === 401) {
      throw new Error('No autenticado.');
    } else {
      throw error;
    }
  }
}

async function getAddressBalance(network, address) {
  const url = `/v3/data/${network}/address/${address}/balance/native`;

  try {
    const response = await startonApi.get(url);
    console.log('Respuesta:', response.status, response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data);
    if (error.response.status === 401) {
      throw new Error('No autenticado.');
    } else {
      throw error;
    }
  }
}

async function getContractBalance(network, contractAddress, address) {
  const url = `/v3/data/${network}/erc20/${contractAddress}/balance`;

  try {
    const response = await startonApi.get(url, { params: { address } });
    console.log('Respuesta:', response.status, response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data);
    if (error.response.status === 401) {
      throw new Error('No autenticado.');
    } else {
      throw error;
    }
  }
}

module.exports = { getGasPrice, getAddressBalance, getContractBalance };
