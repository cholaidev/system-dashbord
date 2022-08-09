//subscription controller
const validationOptions = require('../shared/options/joi.options');//validation 
// data validators
const getSubscriptionInvoiceValidator = require('./validators/subscription.get.invoice.validator')
//services
const getSubscriptionInvoiceService =require('./services/get.subscription.invoice.service')
//config data


/**
 * get tenant invoices (async)
 * @param {*} req 
 * @param {*} res 
 */
const getSubscriptionInvoices = async (req,res) => {
    let { error } = getSubscriptionInvoiceValidator.validationSchema.validate(req.query,validationOptions);
    if(error){
        res.status(400).send(error.details);
    }else{
        try{
            const subscriptionInvoices = await getSubscriptionInvoiceService.execute(req.query);//get tenant invoice service
            res.status(200).send(subscriptionInvoices);
        }catch(error){
            console.log(error);
            res.status(500).send("Failed to retrive tenant invoice(s). Info : "+error.message);
        }
    }
}
module.exports = {
    getSubscriptionInvoices
}