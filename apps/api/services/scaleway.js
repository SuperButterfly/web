const axios = require('axios')
const { SCW_URL, HEADERS } = require('../utils/consts.js')

const sendRequest = async (method, endpoint, body = null) => {
  try {
    const reqMethod = method.toLowerCase()
    
    if(reqMethod === 'get') {
      const response = await axios[reqMethod](`${SCW_URL}${endpoint}`, {
        headers: HEADERS
      })
      return response.data
    }

    const response = await axios[reqMethod](`${SCW_URL}${endpoint}`, body, { headers: HEADERS })
    return response.data
  } catch (error) {
    console.log(error.response.data)
  }
}

module.exports = { sendRequest }