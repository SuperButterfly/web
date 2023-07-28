const { Router } = require('express');
const faucetRouter = Router();

const { requestFaucet } = require('../../controllers/inputs/faucet.controllers.js');

faucetRouter.post('/:network', requestFaucet);

module.exports = faucetRouter;
