const { Router } = require('express')
const routerApi = Router()

const userInputRouter = require('./inputs/user')
const userOutputRouter = require('./outputs/user')

const pageInputRouter = require('./inputs/page')
const pageOutputRouter = require('./outputs/page')

const projectInputRouter = require('./inputs/project')
const projectOutputRouter = require('./outputs/project')

routerApi.use('/user', userInputRouter, userOutputRouter)

routerApi.use('/page', pageInputRouter)
routerApi.use('/page', pageOutputRouter)

routerApi.use('/project', projectInputRouter)
routerApi.use('/project', projectOutputRouter)

module.exports = routerApi
