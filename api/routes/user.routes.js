'use strict';

const { verifyToken } = require('../middlewares/auth.js');
const { Router } = require('express');
const userRouter = Router();
const {
  addUser,
  getUser,
  updateUser,
  deleteUser,
  getSingleUser
} = require("../controllers/user.controllers.js");

//post / addUser

userRouter.post('/', [verifyToken], addUser);

// get  /:email  getUser
userRouter.get('/:email', [verifyToken], getUser);

// get  /:id getSingleUser
userRouter.get('/single/:id', [verifyToken], getSingleUser);
// patch  /:email  updateUser
userRouter.patch('/:email', [verifyToken], updateUser);

// patch  /delete/:email  deleteUser 
userRouter.patch('/delete/:email', [verifyToken], deleteUser);


module.exports = userRouter;
