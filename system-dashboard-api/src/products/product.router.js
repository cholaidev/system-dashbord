//product module router
const productController = require('./product.controller');//user controller
const router = require('express').Router();//express router

//get  
router.get('/',productController.get);

//create
router.post('/',productController.create)

//update
router.put('/',productController.update);



router.delete('/',productController.del)




module.exports = router; //exports user module routes