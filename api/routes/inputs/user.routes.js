"use strict";

const { verifyToken } = require("../../middlewares/auth.js");
const { Router } = require("express");
const userRouter = Router();
const { addUser, updateUser, deleteUser } = require("../../controllers/user.controllers.js");

//post / addUser

userRouter.post("/", [verifyToken], addUser);

// patch  /:email  updateUser
userRouter.patch("/:email", [verifyToken], updateUser);

// patch  /delete/:email  deleteUser
userRouter.patch("/delete/:email", [verifyToken], deleteUser);

module.exports = userRouter;
