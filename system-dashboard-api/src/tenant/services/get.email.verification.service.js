const EmailVerificationModel = require('../email.verification.model');
const { masterKnex } = require('../../knex');



const execute = async (queryParams = '') => {
    try {
        const result = await EmailVerificationModel.query(masterKnex).modify((queryBuilder) => {
            queryBuilder.select("id","email","createdAt","ipAddress","isVerified","verifiedAt","verifyWithin")
            if (queryParams.limit) {
                queryBuilder.limit(queryParams.limit)
            }
        })
        return result
    } catch (error) {
        console.log(error);
        throw Error(error.message);
    }
}
module.exports = {
    execute
};