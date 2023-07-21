const startonApi = require('../../services/smartContractAxiosInstance');

async function requestFaucet(req, res, next) {
  const { network } = req.params;
  const { wallet, captchaToken } = req.body;

  const url = `/v3/faucet/${network}`;

  const payload = {
    wallet,
    captchaToken,
  };

  try {
    const response = await startonApi.post(url, payload);
    console.log('Respuesta:', response.status, response.data);
    res.status(201).json(response.data);
  } catch (error) {
    console.error('Error:', error.response.status, error.response.data);
    next(error);
  }
}

module.exports = { requestFaucet };
