const Joi = require('@hapi/joi');

const validationSchema = Joi.object().keys({ 
    limit:Joi.number()
});

module.exports = {
    Joi,
    validationSchema
};