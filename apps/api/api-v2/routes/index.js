const { Router } = require('express')
const routerApi = Router()

const colorInputRouter = require('./inputs/color')
const colorOutputRouter = require('./outputs/color')

const componentInputRouter = require('./inputs/componet')
const componentOutputRouter = require('./outputs/componet')

const cssClassInputRouter = require('./inputs/cssClass')
const cssClassOutputRouter = require('./outputs/cssClass')

const customComponentInputRouter = require('./inputs/customcomponent')
const customComponentOutputRouter = require('./outputs/customcomponent')

const datatableInputRouter = require('./inputs/datatable')
const datatableOutputRouter = require('./outputs/datatable')

const instanceInputRouter = require('./inputs/instance')
const instanceOutputRouter = require('./outputs/instance')

const layaoutInputRouter = require('./inputs/layaout')
const layaoutOutputRouter = require('./outputs/layaout')

const notificationInputRouter = require('./inputs/notification')
const notificationOutputRouter = require('./outputs/notification')

const pageInputRouter = require('./inputs/page')
const pageOutputRouter = require('./outputs/page')

const presetInputRouter = require('./inputs/preset')
const presetOutputRouter = require('./outputs/preset')

const projectInputRouter = require('./inputs/project')
const projectOutputRouter = require('./outputs/project')

const propertyInputRouter = require('./inputs/property')
const propertyOutputRouter = require('./outputs/property')

const textInputRouter = require('./inputs/text')
const textOutputRouter = require('./outputs/text')

const userInputRouter = require('./inputs/user')
const userOutputRouter = require('./outputs/user')

const workspaceInputRouter = require('./inputs/workspace')
const workspaceOutputRouter = require('./outputs/workspace')

routerApi
  .use('/color', colorInputRouter, colorOutputRouter)
  .use('/component', componentInputRouter, componentOutputRouter)
  .use('/cssClass', cssClassInputRouter, cssClassOutputRouter)
  .use(
    '/customcomponent',
    customComponentInputRouter,
    customComponentOutputRouter
  )
  .use('/datatable', datatableInputRouter, datatableOutputRouter)
  .use('/instance', instanceInputRouter, instanceOutputRouter)
  .use('/layaout', layaoutInputRouter, layaoutOutputRouter)
  .use('/notification', notificationInputRouter, notificationOutputRouter)
  .use('/page', pageInputRouter, pageOutputRouter)
  .use('/preset', presetInputRouter, presetOutputRouter)
  .use('/project', projectInputRouter, projectOutputRouter)
  .use('/property', propertyInputRouter, propertyOutputRouter)
  .use('/text', textInputRouter, textOutputRouter)
  .use('/user', userInputRouter, userOutputRouter)
  .use('/workspace', workspaceInputRouter, workspaceOutputRouter)

module.exports = routerApi
