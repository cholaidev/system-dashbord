//user module router
const userController = require('./user.controller');//user controller
const auth = require('../systemuser/middleware/auth');//middleware to check for authentication
const router = require('express').Router();//express router


router.get('/',auth,userController.getUsers);


module.exports = router; //exports user module routes