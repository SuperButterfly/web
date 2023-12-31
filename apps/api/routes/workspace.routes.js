'use strict'

const { verifyToken } = require('../middlewares/auth.js')
const { Router } = require('express')
const workspaceRouter = Router()
const {
  addWorkspace,
  getWorkspace,
  getUserWorkspaces,
  updateWorkspace,
  addCollaborator,
  updateCollaborator,
  removeCollaborator,
  deleteWorkspace
} = require('../controllers/workspace.controllers.js')

// post  /:userId  addWorkspace
workspaceRouter.post('/:userEmail', [verifyToken], addWorkspace)

// get  /:id  getWorkspace
workspaceRouter.get('/:id', [verifyToken], getWorkspace)

// get /ofuser/:userId getUserWorkspaces
workspaceRouter.get('/ofuser/:userEmail', [verifyToken], getUserWorkspaces)

// patch  /:id  updateWorkspace
workspaceRouter.patch('/:id', [verifyToken], updateWorkspace)

// patch  /:id  add collaborator to Workspace  &collaborator=viewer | &collaborator=editor
workspaceRouter.patch('/shareAdd/:id', [verifyToken], addCollaborator)

// patch  /:id  edit collaborator of Workspace  &collaborator=viewer | &collaborator=editor
workspaceRouter.patch('/shareUpdate/:id', [verifyToken], updateCollaborator)

// patch  /:id  remove collaborator of Workspace
workspaceRouter.patch('/shareRemove/:id', [verifyToken], removeCollaborator)

// patch  /delete/:id  deleteWorkspace
workspaceRouter.patch('/delete/:id', [verifyToken], deleteWorkspace)

module.exports = workspaceRouter
