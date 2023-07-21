const startonApi = require('../../services/smartContractAxiosInstance')

async function requestFaucet(network, wallet, captchaToken) {
  const url = `/v3`

  const payload = {
    wallet,
    captchaToken,
    network
  }

  try {
    const response = await startonApi.post(url, payload)
    console.log('Respuesta:', response.status, response.data)
    return response.data
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data)
    throw error
  }
}

module.exports = { requestFaucet }
