const Joi = require('@hapi/joi');
const validationSchema = Joi.object().keys({ 

             id:Joi.number().required(),
             isEnabled:Joi.boolean().allow(false,true),
             storageLimit:Joi.object({
                 month:Joi.number().allow(null,'')
             }).allow(null,''),
             exclusivePath:Joi.array().allow(null,''),
             name: Joi.string().allow(null,''),
             userLimit: Joi.number().allow("",null),
             identifier: Joi.string().allow(null,''),
             reportLimit: Joi.number().allow(null,''),
             invoiceLimit: Joi.number().allow(null,''),
    })
module.exports = {
    Joi,
    validationSchema
};