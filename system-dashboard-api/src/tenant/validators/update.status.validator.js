const Joi = require('@hapi/joi');

const validationSchema = Joi.object().keys({ 
        status:Joi.boolean().valid(1,0),
        billing_notification:Joi.boolean().valid(true,false),
        id:Joi.number().required()
    })
module.exports = {
    Joi,
    validationSchema
};