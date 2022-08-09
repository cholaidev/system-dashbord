//register service test
const registerService = require('./user.register.service');
const userTestDataHelper = require('../helpers/user.test.data.helper');

test('User register - execute fn',async done => {
    const expectedResponse = userTestDataHelper.getTestExpectedUserResponse();
    const data = userTestDataHelper.getTestRegisterUserData();
    try{
        const resp = await registerService.execute(data);
        expect(resp).toHaveProperty('workspaceId',expectedResponse.workspaceId);
        expect(resp).toHaveProperty('email',expectedResponse.email);
        expect(resp).toHaveProperty('role',expectedResponse.role);
        expect(resp).toHaveProperty('token',expect.any(String))
        expect(resp).toHaveProperty('refreshToken',expect.any(String)); 
        done();
    }catch(error){
        expect(error).toEqual(expect.any(Error));
        done(error);
    }
});

test('User register - generatePasswordHash fn',async done => {
    const password = userTestDataHelper.getTestLoginUserData().password;

    try {
        const hash = await registerService.generatePasswordHash(password);
        expect(hash).toEqual(expect.any(String));
        done();
    }catch(error){
        expect(error).toEqual(expect.any(Error));
        done(error);
    }
});

test('User register - handleRegistration fn',async done => {
    const expectedResponse = userTestDataHelper.getTestExpectedUserResponse();
    const testUserModel = await userTestDataHelper.getTestUserModel();
   
    try{
        const handleRegistration = await registerService.handleRegistration(testUserModel);
        expect(handleRegistration).toHaveProperty('workspaceId',expectedResponse.workspaceId);
        expect(handleRegistration).toHaveProperty('email',expectedResponse.email);
        expect(handleRegistration).toHaveProperty('role',expectedResponse.role);
        expect(handleRegistration).toHaveProperty('token',expect.any(String));
        expect(handleRegistration).toHaveProperty('refreshToken',expect.any(String)); 
        done();
    }catch(error){
        expect(error).toEqual(expect.any(Error));
        done(error);
    }  
});

test('User register - emitRegisterEvent fn',async done => {
    const testUserModel = await userTestDataHelper.getTestUserModel();
    try{
        const emitEvent = registerService.emitRegisterEvent(testUserModel);
        expect(emitEvent).toBeTruthy(); 
        done();
    }catch(error){
        expect(error).toEqual(expect.any(Error));
        done(error);
    }  
});