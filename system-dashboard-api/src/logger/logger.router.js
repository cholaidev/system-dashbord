//tenant module router
const loggerController = require('./logger.controller');//logger controller
const router = require('express').Router();//express router

//get logger 
router.get('/',loggerController.getLoggers);

module.exports = router; //exports user module routes