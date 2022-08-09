const Joi = require('@hapi/joi');
const configData = require('../../shared/helpers/config.helper');

const validationSchema = Joi.object().keys({ 
    limit:Joi.number(),
    sortOrder : Joi.string().valid('asc','desc'),    // isTrail:Joi.boolean().required()
    getAllTenant : Joi.boolean(),
});

module.exports = {
    Joi,
    validationSchema
};