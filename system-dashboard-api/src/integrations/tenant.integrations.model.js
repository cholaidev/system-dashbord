//Jira Integration Model
const { Model } = require('../knex');

class TenantIntegrationsModel extends Model{
    static get tableName(){
        return 'tenant_integrations';
    }

    static get idColumn(){
        return 'id';
    }

    static get relationMappings(){
        return {
            createdByUser : {
                relation : Model.HasOneRelation,
                modelClass : require('../tenant/tenant.model'),
                join : {
                    from : 'tenant_integrations.createdBy',
                    to : 'tenants.id'
                }
            },
            updatedByUser : {
                relation : Model.HasOneRelation,
                modelClass : require('../tenant/tenant.model'),
                join : {
                    from : 'tenant_integrations.updatedBy',
                    to : 'tenants.id'
                }
            },
          
            tenant : {
                relation : Model.BelongsToOneRelation,
                modelClass : require('../tenant/tenant.model'),
                join: {
                    from: 'tenant_integrations.tenantId',
                    to: 'tenants.id',
                }
            },
            integrations: {
                relation : Model.BelongsToOneRelation,
                modelClass : require('./integrations.model'),
                join: {
                    from: 'tenant_integrations.integrationId',
                    to: 'integrations.id',
                }
            },
            tenantIntegrationConfig : {
                relation : Model.HasManyRelation,
                modelClass : require('./tenant.integration.config.model'),
                join : {
                    from : 'tenant_integrations.id',
                    to : 'tenant_integrations_config.tenantIntegrationId'
                },
            },
        }
    }
}
module.exports = TenantIntegrationsModel;