const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const updateColor = async (req, res, next) => {}

module.exports = { updateColor: catchedAsync(updateColor) }
