const { verifyToken } = require("../../middlewares/auth.js");
const { Router } = require("express");
const pressetsRouter = Router();
const {
  addConfig,
  updateConfig,
  deleteConfig,
  destroyConfig,
} = require("../../controllers/inputs/pressets.controllers.js");

pressetsRouter.post("/addPressets/:id", verifyToken, addConfig);

pressetsRouter.patch("/udpatePressets/:id", verifyToken, updateConfig);

pressetsRouter.delete("/deletePressets/:id", verifyToken, deleteConfig);

pressetsRouter.delete("/destroyPressets/:id", verifyToken, destroyConfig);

module.exports = pressetsRouter;
