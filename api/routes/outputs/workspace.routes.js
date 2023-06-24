"use strict";

const { verifyToken } = require("../../middlewares/auth.js");
const { Router } = require("express");
const workspaceRouter = Router();
const { getWorkspace, getUserWorkspaces } = require("../../controllers/workspace.controllers.js");

// get  /:id  getWorkspace
workspaceRouter.get("/:id", [verifyToken], getWorkspace);

// get /ofuser/:userId getUserWorkspaces
workspaceRouter.get("/ofuser/:userEmail", [verifyToken], getUserWorkspaces);

module.exports = workspaceRouter;
