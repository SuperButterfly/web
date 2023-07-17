const { Router } = require('express')
const routerApi = Router()

const userInputRouter = require('./inputs/user')
const userOutputRouter = require('./outputs/user')

const pageInputRouter = require('./inputs/page')
const pageOutputRouter = require('./outputs/page')

const projectInputRouter = require('./inputs/project')
const projectOutputRouter = require('./outputs/project')

const presetInputRouter = require('./inputs/preset')
const presetOutputRouter = require('./outputs/preset')

const layaoutInputRouter = require('./inputs/layaout')
const layaoutOutputRouter = require('./outputs/layaout')

const textInputRouter = require('./inputs/text')
const textOutputRouter = require('./outputs/text')

const colorInputRouter = require('./inputs/color')
const colorOutputRouter = require('./outputs/color')

const workspaceInputRouter = require('./inputs/workspace')
const workspaceOutputRouter = require('./outputs/workspace')

const propertyInputRouter = require('./inputs/property')
const propertyOutputRouter = require('./outputs/property')

const notificationInputRouter = require('./inputs/notification')
const notificationOutputRouter = require('./outputs/notification')

routerApi
  .use('/user', userInputRouter, userOutputRouter)

  .use('/page', pageInputRouter, pageOutputRouter)

  .use('/project', projectInputRouter, projectOutputRouter)

  .use('/preset', presetInputRouter, presetOutputRouter)

  .use('/layaout', layaoutInputRouter, layaoutOutputRouter)

  .use('/text', textInputRouter, textOutputRouter)

  .use('/color', colorInputRouter, colorOutputRouter)

  .use('/workspace', workspaceInputRouter, workspaceOutputRouter)

  .use('/property', propertyInputRouter, propertyOutputRouter)

  .use('/notification', notificationInputRouter, notificationOutputRouter)


module.exports = routerApi
