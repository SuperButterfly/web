const { Router } = require('express')
const router = Router()

const pageInputRouter = require('./inputs/page')
const pageOutputRouter = require('./outputs/page')

const projectInputRouter = require('./inputs/project')
const projectOutputRouter = require('./outputs/project')

router.use('/page', pageInputRouter)
router.use('/page', pageOutputRouter)

router.use('/project', projectInputRouter)
router.use('/project', projectOutputRouter)
