const TenantModel = require('../tenant.model');
const { masterKnex } = require('../../knex');
const cache  = require('../../cache');
const knexHelper = require('../../shared/helpers/knex.helper');

module.exports = async(req,res,next) => {
    const subdomains = req.query.subdomains;
    if(Array.isArray(subdomains) && subdomains.length === 0){
        res.status(400).send('No Tenant Identification!');  
    }else{
        try{
            const tenantDomain = subdomains
            const findDomain = await TenantModel.query(masterKnex).findOne({ domain : tenantDomain })
            if(!findDomain){
                res.status(400).send('Invalid Tenant Identification!');
            }else{
                req.tenantDomain = findDomain.domain;
                req.tenantId = findDomain.id;
                req.knex =  getKnexForReq(findDomain.id);
                delete req.query.subdomains
                next();
            }
        }catch(error){
            console.log('error',error);
            res.status(401).send(error.message);
        }
       
    }
}
function getKnexForReq(tenantId){
    let knex = cache.get(tenantId)
    if(!knex){
        knex = knexHelper.getKnexConfig(tenantId);
        cache.set(tenantId,knex);
    }
    return knex;
}