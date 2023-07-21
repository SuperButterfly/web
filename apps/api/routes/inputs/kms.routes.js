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
faucetRouter.patch('/kms/:id', updateKMSById);
faucetRouter.patch('/wallet/:address', updateWalletByAddress);
faucetRouter.delete('/kms/:id', deleteKMSById);
faucetRouter.delete('/wallet/:address', deleteWalletByAddress);

module.exports = faucetRouter;
