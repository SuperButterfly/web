const express = require("express");
const router = express.Router();
const shareController = require("../../controllers/inputs/share.controller");

router.post("/:idProject", shareController.shareProjectRtc);

module.exports = router;
