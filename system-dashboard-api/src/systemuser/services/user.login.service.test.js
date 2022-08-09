//login service test
const loginService = require('./user.login.service');
const userTestDataHelper = require('../helpers/user.test.data.helper');

test('User login - execute fn',async done => {

    const logindata = userTestDataHelper.getTestLoginUserData();
    const expectedResponse = userTestDataHelper.getTestExpectedUserResponse();

    try{
        await userTestDataHelper.getTestUserModel();
        const resp = await loginService.execute(logindata);
        expect(resp).toHaveProperty('workspaceId',expectedResponse.workspaceId);
        expect(resp).toHaveProperty('email',expectedResponse.email);
        expect(resp).toHaveProperty('role',expectedResponse.role);
        expect(resp).toHaveProperty('token',expect.any(String));
        expect(resp).toHaveProperty('refreshToken',expect.any(String)); 
        done();
    }catch(error){
        expect(error).toEqual(expect.any(Error));
        done(error);
    }  
});