const { Router } = require("express");
const instanceRouter = Router();
const { getInstances } = require("../../controllers/inputs/instance.controllers.js");

instanceRouter.patch("/:id", getInstances);

module.exports = instanceRouter;
