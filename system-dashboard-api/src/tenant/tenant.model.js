const { Model } = require('../knex');

class TenantModel extends Model{
    static get tableName(){
        return 'tenants';
    }

    static get idColumn(){
        return 'id';
    }
    
    static get relationMappings(){
        
        return {
            tenantIntegrations : {
                relation : Model.HasManyRelation,
                modelClass : require('../integrations/tenant.integrations.model'),
                join : {
                    from : 'tenants.id',
                    to : 'tenant_integrations.tenantId'
                }
            },
            tenantSubscriptions : {
                relation : Model.HasManyRelation,
                modelClass : require('../subscription/subscription.model'),
                join : {
                    from : 'tenants.id',
                    to : 'subscriptions.tenantId'
                }
            },
            activeSubscription : {
                relation : Model.HasOneRelation,
                modelClass : require('../subscription/subscription.model'),
                join : {
                    from : 'tenants.activeSubscriptionId',
                    to : 'subscriptions.id'
                }
            },
            previousSubscription : {
                relation : Model.HasOneRelation,
                modelClass : require('../subscription/subscription.model'),
                join : {
                    from : 'tenants.previousSubscriptionId',
                    to : 'subscriptions.id'
                }
            },
            tenantInvoices : {
                relation : Model.HasManyRelation,
                modelClass : require('./tenant.invoices.model'),
                join : {
                    from : 'tenants.id',
                    to : 'tenant_invoices.tenantId'
                }
            },
        }
    }
}

module.exports = TenantModel;