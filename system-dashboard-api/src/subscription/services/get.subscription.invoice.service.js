const TenantInvoicesModel = require('../../tenant/tenant.invoices.model');
const { masterKnex } = require('../../knex');

const execute = async (queryParams) => {
    try{
        var filters = {};
        if(queryParams.tenantInvoiceId){
            filters.tenantId = queryParams.tenantInvoiceId;
        }
        const tenantInvoices = await TenantInvoicesModel.query(masterKnex)
        .where(filters);

        return tenantInvoices;
        
    }catch(error){
        throw Error("Failed to get tenant invoice(s)! -"+error.message);
    }
}

module.exports = {
    execute
};