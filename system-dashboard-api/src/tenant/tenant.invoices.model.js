const { Model } = require('../knex');

class TenantInvoicesModel extends Model{
    static get tableName(){
        return 'tenant_invoices';
    }

    static get idColumn(){
        return 'id';
    }

   
    static get relationMappings(){
        
        return {
            invoiceForTenant : {
                relation : Model.HasOneRelation,
                modelClass : require('./tenant.model'),
                join : {
                    from : 'tenant_invoices.tenantId',
                    to : 'tenants.id'
                }
            }
        }
    }
}

module.exports = TenantInvoicesModel;