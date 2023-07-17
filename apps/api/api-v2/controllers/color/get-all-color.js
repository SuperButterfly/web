const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getAllColor = async (req, res, next) => {}

module.exports = { getAllColor: catchedAsync(getAllColor) }
