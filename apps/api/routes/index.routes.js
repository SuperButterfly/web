// imports
const { Router } = require('express')
const router = Router()

const Auth = require('./auth.routes.js')

// ejemplo
// const Children = require("./children.routes.js");
// reemplazado por
const childrenInputRouter = require('./inputs/children.routes.js')
const childrenOutputRouter = require('./outputs/children.routes.js')

// const Classes = require("./class.routes.js");
const classesInputRouter = require('./inputs/class.routes.js')
const classesOutputRouter = require('./outputs/class.routes.js')

// const Component = require("./component.routes.js");
const componentInputRouter = require('./inputs/component.routes.js')
const componentOutputRouter = require('./outputs/component.routes.js')

// const Mail = require("./mail.routes.js");
const mailInputRouter = require('./inputs/mail.routes.js')
const mailOutputRouter = require('./outputs/mail.routes.js')

// const Notification = require("./notification.routes.js");
const notificationInputRouter = require('./inputs/notification.routes.js')

// const Pressets = require("./pressets.routes.js");
const pressetsInputRouter = require('./inputs/pressets.routes.js')
const pressetsOutputRouter = require('./outputs/pressets.routes.js')

// const Resources = require("./resources.routes.js");
const resourcesInputRouter = require('./inputs/resources.routes.js')
const resourcesOutputRouter = require('./outputs/resources.routes.js')

// const Template = require("./template.routes.js");
const templateInputRouter = require('./inputs/template.routes.js')
const templateOutputRouter = require('./outputs/template.routes.js')

// const Translation = require("./translation.routes.js");
const translationInputRouter = require('./inputs/translation.routes.js')

// const User = require("./user.routes.js");
const usersInputRouter = require('./inputs/user.routes.js')
const usersOutputRouter = require('./outputs/user.routes.js')

// const Workspace = require("./workspace.routes.js");
const workspaceInputRouter = require('./inputs/workspace.routes.js')
const workspaceOutputRouter = require('./outputs/workspace.routes.js')

// Instance routes
const instanceInputRouter = require('./inputs/instance.routes.js')
const instanceOutputRouter = require('./outputs/instance.routes.js')

// Domains routes

const domainsInputRouter = require('./inputs/domains.routes.js')


// upload files to ipfs
const upLoadFileToIpFsInputRouter = require('./inputs/uploadFileToIpfs.js')
const upLoadFileToIpFsOutputRouter = require('./outputs/uploadFileToIpfs.js')

const watcherInputRouter = require('./inputs/watcher.routes.js')
const watcherOutputRouter = require('./outputs/watcher.routes.js')

const smartContractProyectsInputRouter = require('./inputs/smartContractProyects.routes.js')
const smartContractProyectsOutputRouter = require('./outputs/smartContractProyects.routes.js')

const webHookStartOnInputRouter = require('./inputs/webHookStartOn.routes')
const webHookStartOnOutputRouter = require('./outputs/webHookStartOn.routes.js')

const transactionStartOnInputRouter = require('./inputs/transactionStartOn.routes')
const transactionStartOnOutputRouter = require('./outputs/transactionStartOn.routes')

const smartContractInputRouter = require('./inputs/smartContract.routes.js')
const smartContractOutputRouter = require('./outputs/smartContract.routes.js')

// routes
router.use('/auth', Auth)
// ejemplo
// router.use("/children", Children);
router.use('/children', childrenInputRouter)
router.use('/children', childrenOutputRouter)
/// ///

// router.use("/classes", Classes);
router.use('/classes', classesInputRouter)
router.use('/classes', classesOutputRouter)

// router.use("/component", Component);
router.use('/component', componentInputRouter)
router.use('/component', componentOutputRouter)

// router.use("/mail", Mail);
router.use('/mail', mailInputRouter)
router.use('/mail', mailOutputRouter)

// router.use("/notification", Notification);
router.use('/notification', notificationInputRouter)

// router.use("/pressets", Pressets);
router.use('/pressets', pressetsInputRouter)
router.use('/pressets', pressetsOutputRouter)

// router.use("/resources", Resources);
router.use('/resources', resourcesInputRouter)
router.use('/resources', resourcesOutputRouter)

// router.use("/template", Template);
router.use('/template', templateInputRouter)
router.use('/template', templateOutputRouter)

// router.use("/translation", Translation);
router.use('/translation', translationInputRouter)

// router.use("/user", User);
router.use('/user', usersInputRouter)
router.use('/user', usersOutputRouter)

// router.use("/workspace", Workspace);
router.use('/workspace', workspaceInputRouter)
router.use('/workspace', workspaceOutputRouter)

// Instance
router.use('/instance', instanceInputRouter)
router.use('/instance', instanceOutputRouter)

// Domains
router.use('/domain', domainsInputRouter)

// smartcontracts
router.use('/smart-contract', smartContractInputRouter)
router.use('/smart-contract', smartContractOutputRouter)

// upload files to ipfs
router.use('/uploadfiles', upLoadFileToIpFsInputRouter)
router.use('/uploadfiles', upLoadFileToIpFsOutputRouter)

// watchers for smart contract
router.use('/smartcontracts', watcherInputRouter)
router.use('/smartcontracts', watcherOutputRouter)

// proyectos de smart contracts
router.use('/project', smartContractProyectsInputRouter)
router.use('/project', smartContractProyectsOutputRouter)

// webhooks
router.use('/webhook', webHookStartOnInputRouter)
router.use('webhook', webHookStartOnOutputRouter)

// transactions
router.use('/transaction', transactionStartOnInputRouter)
router.use('/transaction', transactionStartOnOutputRouter)

module.exports = router
