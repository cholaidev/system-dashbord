const Joi = require('@hapi/joi');


const validationSchema =Joi.object().keys({
    id : Joi.number(),
    stripeProductPriceId : Joi.string().trim() ,
    name : Joi.string().trim(),
    identifier :Joi.string().trim(),
    updatedAt :Joi.number(),
    userLimit :Joi.number().allow(null),
    exclusivePath:  Joi.array().items(Joi.string()).max(10),
    reportLimit :Joi.number(),
    invoiceLimit :Joi.number(),
    storageLimit:Joi.object().keys({
        month:Joi.number(),
        GB:Joi.number()     
    }), 
    coupons :Joi.string() ,
    country_code : Joi.string(),
    price : Joi.string(),
    special_price : Joi.string() ,
    screenshotEnabled : Joi.boolean() 
});



//const modelDescription = validationSchema.describe();
//const stringified = JSON.stringify(storageLimit);



module.exports ={
    Joi,
    validationSchema
};