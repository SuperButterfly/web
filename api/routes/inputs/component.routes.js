const {
  pasteComponent,
  addComponentOrPage,
  groupComponents,
  copyStylesComponent,
  deletedMultipleComponents,
  updateComponent,
  deleteComponentId,
  unGroupComponents,
} = require("../../controllers/inputs/component.controllers.js");
const { verifyToken } = require("../../middlewares/auth.js");
const { Router } = require("express");
const componentRouter = Router();

// post / pasteComponent
componentRouter.post("/pasteComponent/", [verifyToken], pasteComponent);

// post / addComponent
componentRouter.post("/:projectId", [verifyToken], addComponentOrPage);

componentRouter.patch("/groupComponents", [verifyToken], groupComponents);

componentRouter.patch("/unGroupComponents", [verifyToken], unGroupComponents);

componentRouter.patch("/copiedStyles", [verifyToken], copyStylesComponent);

componentRouter.patch("/multipleComponentsDeleted", [verifyToken], deletedMultipleComponents);

// patch  /:id  updateComponent
componentRouter.patch("/:id", [verifyToken], updateComponent);

// patch  /delete/:id  deleteComponentId
componentRouter.patch("/delete/:id", [verifyToken], deleteComponentId);

module.exports = componentRouter;