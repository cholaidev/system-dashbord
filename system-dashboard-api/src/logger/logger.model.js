const { Model } = require('../knex');

class LoggerModel extends Model{
    static get tableName(){
        return 'hs_logs';
    }

    static get idColumn(){
        return 'id';
    }
}

module.exports = LoggerModel;