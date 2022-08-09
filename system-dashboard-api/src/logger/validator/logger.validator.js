const Joi = require('@hapi/joi');

const validationSchema = Joi.object().keys({ 
    id:Joi.number(),
    per_page:Joi.number(),
    page:Joi.number(),
    getAllLogger : Joi.boolean(),
    sortOrder : Joi.string().valid('asc','desc'),    // isTrail:Joi.boolean().required()
});

module.exports = {
    Joi,
    validationSchema
};