const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const addLayaout = async (req, res, next) => {}

module.exports = { addLayaout: catchedAsync(addLayaout) }
