const axios = require('axios')

// AUTHENTICATING TO THE API USING YOUR API KEY
const startonApi = axios.create({
  baseURL: 'https://api.starton.com',
  headers: {
    'x-api-key': 'sk_live_4a92ea22-e4a8-43da-bae9-e8ef444165bc'
  }
})

module.exports = startonApi
