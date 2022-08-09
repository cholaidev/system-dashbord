const Joi = require('@hapi/joi');

const validationSchema = Joi.object().keys({ 
    refreshToken : Joi.string().required(),
});

module.exports = {
    Joi,
    validationSchema
};