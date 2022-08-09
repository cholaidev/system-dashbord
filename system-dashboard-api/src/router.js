const router = require('express').Router();//init router
const auth =require('./systemuser/middleware/auth');
const tenantResolver = require('./tenant/middleware/tenant.resolver');
//import modular routers
router.use('/systemUser',require('./systemuser/user.router'));
router.use('/tenants',auth,require('./tenant/tenant.router'));
router.use('/logger',require('./logger/logger.router'))
router.use('/tenantUsers',tenantResolver,require('./user/user.router'));
router.use('/subscriptions',tenantResolver,require('./subscription/subscription.router'));
router.use('/products',require('./products/product.router'))

//export all routes
module.exports = router;