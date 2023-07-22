const { Router } = require('express');
const faucetRouter = Router();

const {
  createKMS,
  deleteWalletByAddress,
  updateKMSById,
  deleteKMSById,
  createWallet,
  updateWalletByAddress
} = require('../../controllers/inputs/faucet.controllers.js');

faucetRouter.post('/kms', createKMS);
faucetRouter.post('/wallet', createWallet);
faucetRouter.patch('/wallet/:address', updateWalletByAddress);
faucetRouter.delete('/wallet/:address', deleteWalletByAddress);
faucetRouter.delete('/kms/:id', deleteKMSById);
faucetRouter.patch('/kms/:id', updateKMSById);

module.exports = faucetRouter;
