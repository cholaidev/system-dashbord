const Joi = require('@hapi/joi');
const userRoles = require('../constants/user.roles.constants');

const validationSchema = Joi.object().keys({
    id : Joi.number().required(),
    email : Joi.string().email().trim(),
    status : Joi.boolean().valid(true,false),
})
.min(2).message("Should have atleast one of the fields - firstname, lastname, email, role, status, profile pic"); //atleast one of them is required

module.exports = {
    Joi,
    validationSchema
};