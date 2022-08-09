const { Model } = require('../knex');

class SubscriptionModel extends Model{
    static get tableName(){
        return 'subscriptions';
    }

    static get idColumn(){
        return 'id';
    }

    static get relationMappings(){
        
        return {
            subscribedTenant : {
                relation : Model.HasOneRelation,
                modelClass : require('../tenant/tenant.model'),
                join : {
                    from : 'subscriptions.tenantId',
                    to : 'tenants.id'
                }
            },
            subscribedProduct : {
                relation : Model.HasOneRelation,
                modelClass : require('./product.model'),
                join : {
                    from : 'subscriptions.productId',
                    to : 'products.id'
                }
            }
        }
    }
}

module.exports = SubscriptionModel;