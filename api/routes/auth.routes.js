const { Router } = require('express');
const authRouter = Router();
const {
  signIn, 
  signUp
} = require("../controllers/auth.controllers.js");

// post  /signIn/  signIn
authRouter.post('/signIn/', signIn);

// post  /signUp/  signUp
authRouter.post('/signUp/', signUp);

module.exports = authRouter;