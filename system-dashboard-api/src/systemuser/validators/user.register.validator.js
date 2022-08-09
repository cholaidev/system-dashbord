const Joi = require('@hapi/joi');
const userRoles = require('../constants/user.roles.constants');

const validationSchema = Joi.object().keys({
    username : Joi.string().required().trim(),
    email : Joi.string().email().required().trim(),
    password : Joi.string().required().min(7),
    status : Joi.boolean().required().valid(true,false),
});

module.exports = {
    Joi,
    validationSchema
};