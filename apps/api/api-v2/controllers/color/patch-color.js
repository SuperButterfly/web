const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const patchColor = async (req, res, next) => {}

module.exports = { patchColor: catchedAsync(patchColor) }
