const { Router } = require("express");
const instanceRouter = Router();
const { getInstance, getInstances } = require("../../controllers/inputs/instance.controllers.js");

instanceRouter.get("/:id", getInstance);
instanceRouter.get("/", getInstances);

module.exports = instanceRouter;
