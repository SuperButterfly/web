"use strict";

const { verifyToken } = require("../../middlewares/auth.js");
const { Router } = require("express");
const userRouter = Router();
const { getUser, getSingleUser } = require("../../controllers/user.controllers.js");

// get  /:email  getUser
userRouter.get("/:email", [verifyToken], getUser);

// get  /:id getSingleUser
userRouter.get("/single/:id", [verifyToken], getSingleUser);

module.exports = userRouter;
