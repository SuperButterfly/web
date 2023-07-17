const { models } = require('../../database/connection/database')
const { catchedAsync, response } = require('../../utils/err')
const { ClientError } = require('../../utils/err/errors')

const deleteLayaout = async (req, res, next) => {}

module.exports = { deleteLayaout: catchedAsync(deleteLayaout) }
