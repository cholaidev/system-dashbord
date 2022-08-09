//subscription module router
const subscriptionController = require('./subscription.controller');//subscription controller
const router = require('express').Router();//express router
const auth = require('../systemuser/middleware/auth');//middleware to check for authentication


router.get('/get-subscription-invoices',auth,subscriptionController.getSubscriptionInvoices);


module.exports = router; //exports subscription module routes