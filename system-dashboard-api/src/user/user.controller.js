//user controller
const validationOptions = require('../shared/options/joi.options');//validation options
// data validators

const getValidator = require('./validators/user.get.validator');

//service
const getService = require('./services/user.get.service');


/**
 * get (async)
 * @param {*} req 
 * @param {*} res 
 */
const getUsers = async (req,res) => {
    let { error } = getValidator.validationSchema.validate(req.query,validationOptions);
    if(error){
        res.status(400).send(error.details);
    }else{
        try{
            const users = await getService.execute(req.query,req.knex);//getUsers service
            res.status(200).send(users);
        }catch(error){
            console.log(error);
            res.status(500).send("Failed to retrive user(s). Info : "+error.message);
        }
    }
}

//export usercontroller methods
module.exports = {
    getUsers,
}
