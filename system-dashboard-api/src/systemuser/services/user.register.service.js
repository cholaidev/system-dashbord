const UserModel = require('../user.model');
const bcryptHelper = require('../helpers/bcrypt.helper');
const filterUserData = require('../helpers/filter.user.data.helper').filterUserResponse;
const dateHelper = require('../../shared/helpers/date.helper');
const tokenHelper = require('../helpers/token.helper');



const execute = async (data) => {
    try{
        if(await UserModel.isEmailUnique(data.email)){ //check for duplicate emails
            const timeStamps = dateHelper.getTimeStamps();
            data.createdAt = timeStamps.createdAt;
            const toSendPass = data.password;
            data.password = await generatePasswordHash(data.password);
            const user = await UserModel.query().insert(data).returning('*');//returning(*) can return data in single query for postgres
            return handleRegistration(user,toSendPass); 
        }else{
            throw Error('Email already exists!');
        }
          
    }catch(error){
        //console.log(error);
        throw Error(error.message);
    }  
}

generatePasswordHash = async(passwordString) => {
    return bcryptHelper.hashPassword(passwordString);
}

handleRegistration = async(user,toSendPass) => {
    let { token, refreshToken } = await tokenHelper.generateTokens(user);
    // emitRegisterEvent(user,toSendPass);//emit register event
    return filterUserData(user,token,refreshToken);  
}

// emitRegisterEvent = async (user,toSendPass) => {
//     let registerEvent = {
//         event_name : "USER_REGISTRATION",
//         event_data : { firstname : user.firstname , lastname : user.lastname , email  : user.email , toSendPass }
//     };
//     customEmitter.customEmit(registerEvent);
// }

module.exports = {
    execute,
    generatePasswordHash,
    handleRegistration,
};