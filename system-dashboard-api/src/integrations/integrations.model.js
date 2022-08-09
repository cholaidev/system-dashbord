//JIRA INTEGRATION CONFIG MODEL
const { Model } = require('../knex');

class IntegrationsModel extends Model{
    static get tableName(){
        return 'integrations';
    }

    static get idColumn(){
        return 'id'
    }

    static get relationMappings(){
        return {
            tenantIntegrations : {
                relation : Model.HasManyRelation,
                modelClass : require('./tenant.integrations.model'),
                join : {
                    from : 'integrations.id',
                    to : 'tenant_integrations.integrationId'
                }
            },
        }
    }
}

module.exports = IntegrationsModel;