

const getLoggersService = require('../logger/services/get.logger.services')
const getLoggerValidator = require('../logger/validator/logger.validator')
const getLoggers = async (req, res) => {
    // console.log("req",req.query)
    // let { error } = getLoggerValidator.validationSchema.validate(req.query, validationOptions); //validate by passing create validation schema and req.body
    // if (error) {
    //     res.status(400).send(error.details);
    // } else {
        try {
        const getLoggers = await getLoggersService.execute(req.query,req);//create service
        res.status(201).send(getLoggers);
    }
    catch (error) {
        res.status(500).send("Failed to created logger!. Info : " + error.message);
    }
// }
          
}


module.exports = {
    getLoggers
}