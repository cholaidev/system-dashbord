const TenantModel = require('../tenant.model');
const { masterKnex } = require('../../knex');



const execute = async (queryParams = '') => {
    try {
        if(queryParams.getAllTenant){
            const result = await TenantModel.query(masterKnex).modify((queryBuilder) => {
                queryBuilder.select("id","activeSubscriptionId","createdAt","country","phone as phoneNumber","userCount","domain","firstname","lastname","email","folderSize","paymentStatus","previousSubscriptionId","status","stripeCustomerId","billing_notification","overrides")
                if(queryParams.sortOrder){
                    queryBuilder.orderBy('createdAt',queryParams.sortOrder)
                }
                queryBuilder.withGraphFetched('[activeSubscription(nestedGraphSubscription) as subscription]')
                    .modifiers({
                        nestedGraphSubscription(builder) {
                            builder.withGraphFetched('[subscribedProduct(selectFields) as product]')
                                .modifiers({
                                    selectFields(builder) {
                                        builder.select("*")
                                    }
                                })
                        }
    
                    })
            })
            return result
        }
        else{
            const result = await TenantModel.query(masterKnex).modify((queryBuilder) => {
                queryBuilder.select("id","activeSubscriptionId","createdAt","country","phone as phoneNumber","userCount","domain","firstname","lastname","email","folderSize","paymentStatus","previousSubscriptionId","status","stripeCustomerId","billing_notification","overrides")
                if (queryParams.limit) {
                    queryBuilder.limit(queryParams.limit)
                }
                if(queryParams.sortOrder){
                    queryBuilder.orderBy('createdAt',queryParams.sortOrder)
                }
                queryBuilder.withGraphFetched('[activeSubscription(nestedGraphSubscription) as subscription]')
                    .modifiers({
                        nestedGraphSubscription(builder) {
                            builder.withGraphFetched('[subscribedProduct(selectFields) as product]')
                                .modifiers({
                                    selectFields(builder) {
                                        builder.select("*")
                                    }
                                })
                        }
    
                    })
            })
            return result
        }
        
    } catch (error) {
        console.log(error);
        throw Error(error.message);
    }
}
module.exports = {
    execute
};