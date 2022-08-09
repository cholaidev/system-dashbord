const Joi = require('@hapi/joi');

const validationSchema = Joi.object().keys({ 
    // getAllProduct : Joi.boolean(),
});

module.exports = {
    Joi,
    validationSchema
};