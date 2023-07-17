const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const getIdColor = async (req, res, next) => {}

module.exports = { getIdColor: catchedAsync(getIdColor) }
