'use strict';

// imports
const { Router } = require('express');
const router = Router();

const Auth = require('./auth.routes.js');
const User = require('./user.routes.js');
const Workspace = require('./workspace.routes.js');
const Template = require('./template.routes.js');
const Component = require('./component.routes.js');
const Children = require('./children.routes.js');
const Translation = require('./translation.routes.js');
const Mail = require('./mail.routes.js');
const Resources = require('./resources.routes.js');
const Classes = require('./class.routes.js');
const Notification = require('./notification.routes.js');
const Pressets = require('./pressets.routes.js');
const Prueba = require('./prueba.routes.js')

//routes
router.use('/auth', Auth);
router.use('/user', User);
router.use('/workspace', Workspace);
router.use('/template', Template);
router.use('/component', Component);
router.use('/children', Children);
router.use('/translation', Translation);
router.use('/mail', Mail);
router.use('/notification', Notification);
router.use('/resources', Resources);
router.use('/classes', Classes);
router.use('/pressets', Pressets);
// router.use('/prueba', Prueba);

module.exports = router;
