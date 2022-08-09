const { Model } = require('../knex');

class ProductModel extends Model{
    static get tableName(){
        return 'products';
    }

    static get idColumn(){
        return 'id';
    }

    static get relationMappings(){
        
        return {
            productSubscription : {
                relation : Model.HasManyRelation,
                modelClass : require('./subscription.model'),
                join : {
                    from : 'products.id',
                    to : 'subscriptions.productId'
                }
            }
        }
    }
}

module.exports = ProductModel;