const TenantModel = require('../tenant.model');
const { masterKnex } = require('../../knex');

const execute = async (value) => {
    try {
            const tenantId = value.id
            delete value.tenantId
            return await TenantModel.query(masterKnex).findOne('id', tenantId).patch(value).returning('*');
        }
    catch (error) {
        throw Error("Failed to create user settings! -" + error.message);
    }
}
module.exports = {
    execute,
};