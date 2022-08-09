const Joi = require('@hapi/joi');


const validationSchema =  Joi.object().keys({ 
    id : Joi.number().required(),
    
});


module.exports = {
    Joi,
    validationSchema
};