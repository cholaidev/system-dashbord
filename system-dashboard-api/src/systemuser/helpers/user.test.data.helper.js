const UserModel = require('../systemUser.model');
const bcryptHelper = require('./bcrypt.helper');
const loginService = require('../services/user.login.service');
const filterDataHelper = require('./filter.user.data.helper');
const objectIdHelper = require('../../shared/helpers/object.id.test.helper');

const _id = objectIdHelper.getTestObjectId(1000);
const firstname = 'fname';
const lastname = 'lname';
const email = 'testing@email.com';
const password = 'password';
const role = 'ADMIN'
const workspaceId = objectIdHelper.getTestObjectId(9999);

const getTestLoginUserData = () => {
    return {
        email,
        password
    }
};


const getTestRegisterUserData = () => {
    return {
        _id,
        workspaceId,
        firstname,
        lastname,
        email,
        password,
        role
    };
};

const getTestUserModel = async () => {
    const data = getTestRegisterUserData();
    data.password = await bcryptHelper.hashPassword(data.password);

    try{
        const testUserModel = new UserModel(data);
        await testUserModel.save();
        return testUserModel;
    }catch(error){
        throw new Error(error);
    }
};

const getTestLoginResponse = async () => {
    await getTestUserModel();
    const loginData = getTestLoginUserData();
    const loginResponse = await loginService.execute(loginData);
    return loginResponse;
}

const getTestRefreshTokenData = async () => {
    const { refreshToken } = await getTestLoginResponse();
    return {
        refresh_token : refreshToken
    };
}

const getTestExpectedUserResponse = () => {
    return {
        workspaceId,
        email,
        role
    };
};

const getUserProfile = async () => {
    const testUserModel = await getTestUserModel();
    return filterDataHelper.filterProfileResponse(testUserModel);
}

const getTestUpdateUserData = async () => {
    const userProfile = await getUserProfile();
    const userData = getTestRegisterUserData();
    return {
        id : userProfile.id,
        data : {
            userData
        }
    }
}

module.exports = {
    getTestLoginUserData,
    getTestRegisterUserData,
    getTestExpectedUserResponse,
    getTestUserModel,
    getTestRefreshTokenData,
    getUserProfile,
    getTestUpdateUserData
};