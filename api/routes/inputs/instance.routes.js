const { Router } = require("express");
const instanceRouter = Router();
const { postInstance } = require("../../controllers/inputs/instance.controllers.js");

instanceRouter.post('/', postInstance);


module.exports = instanceRouter;