//validators
const getTenantValidator = require('./validators/tenant.get.validator')
const updateStatusValidator = require('./validators/update.status.validator')
const deleteEmailNotVerifiedValidator = require('./validators/delete.email.not.verified.validator')
const getEmailVerificationValidator = require('./validators/get.email.verification.validator')
const updateTenantFeaturesValidator = require('./validators/update.tenant.features.validator')

//validation oprion
const validationOptions =require('../shared/options/joi.options')
//services
const updateStatusService = require('./services/update.status.service')
const getTenantsService =require('./services/get.tenants.service')
const getEmailVerificationService = require('./services/get.email.verification.service') 
const deleteEmailNotVerifiedService =require('./services/delete.email.not.verified.service')
const updateTenantFeaturesService = require('./services/update.tenant.features.service')



const getTenants = async (req, res) => {
    let { error } = getTenantValidator.validationSchema.validate(req.query, validationOptions); //validate by passing create validation schema and req.body
    if (error) {
        res.status(400).send(error.details);
    } else {
        try {
            const getTenants = await getTenantsService.execute(req.query,req);//create service
            res.status(201).send(getTenants);
        }
        catch (error) {
            res.status(500).send("Failed to created tenant!. Info : " + error.message);
        }
    }

}

const getEmailVerification = async (req, res) => {
    let { error } = getEmailVerificationValidator.validationSchema.validate(req.query, validationOptions); //validate by passing create validation schema and req.body
    if (error) {
        res.status(400).send(error.details);
    } else {
        try {
            const getEmailVerificationData = await getEmailVerificationService.execute(req.query,req);//create service
            res.status(201).send(getEmailVerificationData);
        }
        catch (error) {
            res.status(500).send("Failed to get emailVerificationData!. Info : " + error.message);
        }
    }
}

const deleteEmailVerication = async (req, res) => {
    if(!Array.isArray(req.query.deletedId)){
        req.query.deletedId=[req.query.deletedId]
    }
    let { error } = deleteEmailNotVerifiedValidator.validationSchema.validate(req.query,validationOptions);
    if(error){
        res.status(400).send(error.details);
    }else{
    try{
        const data =await deleteEmailNotVerifiedService.execute(req.query);//delete service
        res.status(200).send(data);
      
    }
    catch(error){
        res.status(400).send('Failed to Delete EmailNotVerified - '+error.message);
    }
}
}

const updateStatusSettings = async (req,res)=>{
    let { error } = updateStatusValidator.validationSchema.validate(req.body,validationOptions);
    if(error){
        res.status(400).send(error.details);
    }else{
        try{
            const upadteStatus = await updateStatusService.execute(req.body);//create service
            res.status(201).send(upadteStatus);
        }catch(error){
            console.log(error);
            res.status(500).send("Failed to updateStatus Info : "+error.message);
        }
    }
}


const updateTenantFeatures = async (req,res)=>{
    let { error } = updateTenantFeaturesValidator.validationSchema.validate(req.body,validationOptions);
    if(error){
        res.status(400).send(error.details);
    }else{
        try{
            const upadteStatus = await updateTenantFeaturesService.execute(req.body);//create service
            res.status(201).send(upadteStatus);
        }catch(error){
            console.log(error);
            res.status(500).send("Failed to updateStatus Info : "+error.message);
        }
    }
}
module.exports = {
    getTenants,
    getEmailVerification,
    deleteEmailVerication,
    updateStatusSettings,
    updateTenantFeatures
}