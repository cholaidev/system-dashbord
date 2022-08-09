
const RefreshTokenModel = require('../refresh.token.model');
const jwtHelper = require('../helpers/jwt.helper');
const tokenHelper = require('../helpers/token.helper');


const execute = async(data) => {
    let { refreshToken } = data;
    const token_data = jwtHelper.verifyRefreshToken(refreshToken);
    
    try{
        const user = await RefreshTokenModel.query().findOne({ systemUserId : token_data.id, 'refreshToken': refreshToken });
        if (!user) {
            throw Error('Invalid Refresh Token');
        }
        refreshedAuthToken = await tokenHelper.generateNewAuthToken(token_data.id);
        return refreshedAuthToken;
    }catch(error){
        console.log(error);
        throw Error("Invalid Refresh Token . Error : "+error.message);
    }

}

module.exports = {
    execute
};
    
