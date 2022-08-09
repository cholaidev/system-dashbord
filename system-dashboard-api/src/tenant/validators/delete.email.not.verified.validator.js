const Joi = require('@hapi/joi');

const validationSchema = Joi.object().keys({ 
    deletedId : Joi.array().min(1).required(),
    limit:Joi.number()
})
module.exports = {
    Joi,
    validationSchema
};