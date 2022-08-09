//refresh auth token service test
const refreshTokenService = require('./user.refresh.auth.token.service');
const userTestDataHelper = require('../helpers/user.test.data.helper');

test('Refresh Auth token - execute fn',async done => {
    const testRefreshTokenData = await userTestDataHelper.getTestRefreshTokenData();
    try{
        const tokenResp = await refreshTokenService.execute(testRefreshTokenData);
        expect(tokenResp).toEqual(expect.any(String));
        done();
    }catch(error){
        expect(error).toEqual(expect.any(Error));
        done(error);
    }
});