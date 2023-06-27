const { verifyToken } = require("../../middlewares/auth.js");
const { Router } = require("express");
const pressetsRouter = Router();
const {
  addTemplateDefaults,
  addColors,
} = require("../../controllers/inputs/pressets.controllers.js");

pressetsRouter.post("/addDefaults/:tempalteId", [verifyToken], addTemplateDefaults);

pressetsRouter.post("/addColors/:tempalteId", [verifyToken], addColors);

module.exports = pressetsRouter;
