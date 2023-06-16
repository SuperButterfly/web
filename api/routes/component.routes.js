'use strict';
const { verifyToken } = require('../middlewares/auth.js');
const { Router } = require('express');
const componentRouter = Router();
const {
  addComponentOrPage,
  getComponent,
  getProjectComponents,
  updateComponent,
  copyStylesComponent,
  deleteComponentId,
  pasteComponent
} = require("../controllers/component.controllers.js");

// post / pasteComponent
componentRouter.post('/pasteComponent/',[verifyToken], pasteComponent)

// post / addComponent
componentRouter.post('/:projectId', [verifyToken], addComponentOrPage)

// get  /:projectId  getProjectComponents
componentRouter.get('/template/:projectId', [verifyToken], getProjectComponents);

// get  /:id  getComponent
componentRouter.get('/:id', [verifyToken], getComponent);

componentRouter.patch('/copiedStyles',[verifyToken],copyStylesComponent)

// patch  /:id  updateComponent
componentRouter.patch('/:id', [verifyToken], updateComponent);

// patch  /delete/:id  deleteComponentId 
componentRouter.patch('/delete/:id', [verifyToken], deleteComponentId);


module.exports = componentRouter;
