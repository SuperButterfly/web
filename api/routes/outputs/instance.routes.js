const { Router } = require("express");
const instanceRouter = Router();
const { getOneInstance } = require("../../controllers/outputs/instance.controllers.js");

instanceRouter.get("/:idTemplate", getOneInstance);
//instanceRouter.get("/", getInstances);

module.exports = instanceRouter;
