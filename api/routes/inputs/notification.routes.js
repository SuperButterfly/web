"use strict";
const { Router } = require("express");
const notificationRouter = Router();
const { deleteNotificationSaved } = require("../../controllers/notification.controllers.js");

notificationRouter.patch("/:id", deleteNotificationSaved);

module.exports = notificationRouter;
