const UserModel = require('../user.model');
const filterProfileResponse = require('../helpers/filter.user.data.helper').filterProfileResponse;
const dateHelper = require('../../shared/helpers/date.helper');


const execute = async (data) => {
    try{
        data.updatedAt = dateHelper.getTimeStamps().updatedAt;
        const toUpdateId = data.id;
        delete data.id; //unset id
        const user =  await UserModel.query().patchAndFetchById(toUpdateId,data);
        return await filterProfileResponse(user);
    }catch(error){
       // console.log(error);
        throw Error("Failed to update. Invalid data. Error : "+error.message);
    }
};

module.exports = {
    execute
};