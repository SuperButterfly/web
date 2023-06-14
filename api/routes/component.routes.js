'use strict';
const { verifyToken } = require('../middlewares/auth.js');
const { Router } = require('express');
const componentRouter = Router();
const {
  addComponent,
  getComponent,
  getProjectComponents,
  updateComponent,
  deleteComponentId
} = require("../controllers/component.controllers.js");

//post / addComponent
componentRouter.post('/:projectId', [verifyToken], addComponent)

// get  /:projectId  getProjectComponents
componentRouter.get('/template/:projectId', [verifyToken], getProjectComponents);

// get  /:id  getComponent
componentRouter.get('/:id', [verifyToken], getComponent);

// patch  /:id  updateComponent
componentRouter.patch('/:id', [verifyToken], updateComponent);

// patch  /delete/:id  deleteComponentId 
componentRouter.patch('/delete/:id', [verifyToken], deleteComponentId);

module.exports = componentRouter;
