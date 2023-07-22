const axios = require('axios')
const { SCW_URL, SCW_PROJECT_ID, HEADERS, SSH_KEY_ID } = require('../utils/consts.js')

const sendRequest = async (method, endpoint, body = null) => {
  try {s
    const response = await axios[method.toLowerCase()](`${SCW_URL}${endpoint}`, body, { headers: HEADERS })
    return response.data
  } catch (error) {
    console.log(error.response)
    throw new Error(`Request failed with status code ${error.response.status}: ${error.response.data.message}`)
  }
}

module.exports = { sendRequest }