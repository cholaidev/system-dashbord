const EmailVerificationModel = require('../email.verification.model');
const { masterKnex } = require('../../knex');

const execute = async (queryParams = '') => {
    try{
        var deleteIdFilter =[];
        if(queryParams.deletedId){
            deleteIdFilter = queryParams.deletedId;
        }
          await EmailVerificationModel.query(masterKnex).delete().whereIn('id',deleteIdFilter)
        
          const data = await EmailVerificationModel.query(masterKnex).modify((queryBuilder) => {
            queryBuilder.select("id","email","createdAt","ipAddress","isVerified","verifiedAt","verifyWithin")
            if (queryParams.limit) {
                queryBuilder.limit(queryParams.limit)
            }
        })

        return {message:'Not Verified Email deleted successfully',data:data};
    }
    catch(error){
        throw Error("Failed to delete emailNotVerifiedData! -"+error.message);
    }

}
module.exports = {
    execute
};