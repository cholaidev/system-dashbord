const TokenModel = require('../token.model');
const RefreshTokenModel = require('../refresh.token.model');
const jwtHelper = require('./jwt.helper');
const dateHelper = require('../../shared/helpers/date.helper');
const configHelper = require('../../shared/helpers/config.helper');

const generateTokens = async(user) => {
    try{
        const token = jwtHelper.generateToken({id: user.id});
        const refreshToken = jwtHelper.generateRefreshToken({id: user.id});
 
        const tokenData = {
            systemUserId : user.id,
            token,
            createdAt : dateHelper.getTimeStamps().createdAt,
            expiresAt : dateHelper.getAddedHours(configHelper.jwtExpiresHours)
        };

        const refreshTokenData = {
            systemUserId : user.id,
            refreshToken,
            createdAt : dateHelper.getTimeStamps().createdAt
        }

        await TokenModel.query().insert(tokenData);
        await RefreshTokenModel.query().insert(refreshTokenData);
   
        return {
            token,
            refreshToken
        }
    }catch(error){
        throw new Error(error.message);
    }
};

const generateNewAuthToken = async(systemUserId) => {
    try{
        const token = jwtHelper.generateToken({id: systemUserId});
        
        const tokenData = {
            systemUserId,
            token,
            createdAt : dateHelper.getTimeStamps().createdAt,
            expiresAt : dateHelper.getAddedHours(configHelper.jwtExpiresHours)
        };

        await TokenModel.query().insert(tokenData)
        return token;
    }catch(error){
        throw new Error(error.message);
    }
}

module.exports = {
    generateTokens,
    generateNewAuthToken
}