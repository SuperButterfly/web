'use strict'
const { verifyToken } = require('../middlewares/auth.js')
const { Router } = require('express')
const mailRouter = Router()
const {
  sendMail,
  sharingWorkspace
} = require('../controllers/mail.controllers.js')

mailRouter.post('/send-email', sendMail)

mailRouter.post('/sharing-Workspace', sharingWorkspace)

module.exports = mailRouter
