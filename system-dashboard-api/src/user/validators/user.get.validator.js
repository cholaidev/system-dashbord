const Joi = require('@hapi/joi');

const validationSchema = Joi.object().keys({ 
    userId : Joi.number(),
    roleId : Joi.number(),
    getAllUser : Joi.boolean(),
});

module.exports = {
    Joi,
    validationSchema
}