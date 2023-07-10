const axios = require('axios')
const { DOM_URL, HEADERS } = require('../../utils/consts.js')

const searchDomains = async (req, res) => {
  try {
    const { searchTerm } = req.body
    const response = await axios(`${DOM_URL}${searchTerm}`, {
      headers: HEADERS
    })

    res
      .status(200)
      .json({ results: response.data.available_domains, success: true })
  } catch (error) {
    res.status(500).json({ error: 'Unexpected error', message: error.message })
  }
}

module.exports = { searchDomains }
