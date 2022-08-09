//JIRA INTEGRATION CONFIG MODEL
const { Model } = require('../knex');

class TenantIntegrationConfigModel extends Model{
    static get tableName(){
        return 'tenant_integrations_config';
    }

    static get idColumn(){
        return 'id'
    }

    static get relationMappings(){
        return {
            tenantIntegrations : {
                relation : Model.BelongsToOneRelation,
                modelClass : require('./tenant.integrations.model'),
                join: {
                    from: 'tenant_integrations_config.tenantIntegrationId',
                    to: 'tenant_integrations.id',
                }
            }
        }
    }
}

module.exports = TenantIntegrationConfigModel;