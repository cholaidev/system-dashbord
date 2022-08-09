//user module router
const userController = require('./user.controller');//user controller
// const auth = require('./middleware/auth');//middleware to check for authentication
const router = require('express').Router();//express router

//create user 
router.post('/',userController.register);
//login user 
router.post('/login',userController.login);
//refresh auth token using refreshToken
router.post('/refreshtoken',userController.refreshAuthToken);
//update user 
// router.put('/',auth,userController.update);

module.exports = router; //exports user module routes