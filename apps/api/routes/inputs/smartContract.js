const express = require('express')
const axios = require('axios')
const router = express.Router()

const startonApi = axios.create({
  baseURL: 'https://api.starton.com',
  headers: {
    'x-api-key': 'sk_live_4a92ea22-e4a8-43da-bae9-e8ef444165bc'
  }
})

// Ruta para desplegar el contrato inteligente
router.post('/deploy-contract', (req, res) => {
  const contractData = {
    network: 'binance-testnet',
    signerWallet: '0x60d9765BbD278db8A9f351e78723Cd01399D8A2c',
    templateId: 'ERC20_META_TRANSACTION',
    name: 'My first smart token',
    description: 'This is the first smart contract I deploy.',
    params: [
      'My first token',
      'MFT',
      '1000000000',
      '0x60d9765BbD278db8A9f351e78723Cd01399D8A2c'
    ],
    speed: 'average'
  }

  startonApi
    .post(
      'https://api.starton.com/v3/smart-contract/from-template',
      contractData
    )
    .then((response) => {
      console.log(response.data)
      res.send(response.data)
    })
    .catch((error) => {
      console.error(error)
      res.status(500).send('Error deploying contract')
    })
})

module.exports = router
