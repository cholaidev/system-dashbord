const Joi = require('@hapi/joi');

const validationSchema = Joi.object().keys({ 
    tenantInvoiceId : Joi.number()
});

module.exports = {
    Joi,
    validationSchema
};