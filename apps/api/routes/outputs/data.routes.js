const { Router } = require('express');
const dataRouter = Router();
const {
  getGasPrice,
  getAddressBalance,
  getContractBalance
} = require('../../controllers/outputs/ipfs.controllers.js');

dataRouter.get('/:network/gas-price', getGasPrice);
dataRouter.get('/:network/address/:address/balance/native', getAddressBalance);
dataRouter.get('/:network/erc20/:contractAddress/balance', getContractBalance);

module.exports = dataRouter;
