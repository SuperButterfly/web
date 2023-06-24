"use strict";
const { verifyToken } = require("../../middlewares/auth.js");
const { Router } = require("express");
const templateRouter = Router();
const {
  addTemplate,
  getTemplate,
  getWorkspaceTemplates,
} = require("../../controllers/template.controllers.js");

// post  /:id  addTemplate
templateRouter.post("/:workspaceId", [verifyToken], addTemplate);

// get  /:id  getTemplate
templateRouter.get("/:id", [verifyToken], getTemplate);

// get /ofuser/:userId getWorkspaceTemplates
templateRouter.get("/ofworkspace/:workspaceId", [verifyToken], getWorkspaceTemplates);

module.exports = templateRouter;
