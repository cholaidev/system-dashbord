//tenant module router
const tenantController = require('./tenant.controller');//user controller
const router = require('express').Router();//express router

//get tenant 
router.get('/',tenantController.getTenants);

//get Email Verification
router.get('/emailVerification',tenantController.getEmailVerification)

//delete emailVerification
router.delete('/deleteEmailVerication',tenantController.deleteEmailVerication)

//update tenantStatus
router.put('/updateStatus',tenantController.updateStatusSettings);

router.put('/update-features',tenantController.updateTenantFeatures);

module.exports = router; //exports user module routes