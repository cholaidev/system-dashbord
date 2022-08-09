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
        }
    }
}

module.exports = ProductModel;