//user update service test
const updateService = require('./user.update.service');
const userTestDataHelper = require('../helpers/user.test.data.helper');

test('User update - execute fn',async done => {
    const updateUserData = await userTestDataHelper.getTestUpdateUserData();
    try{
        const updateResp = await updateService.execute(updateUserData.id,updateUserData.data);
        expect(updateResp).toHaveProperty('id',updateUserData.id);
        expect(updateResp).toHaveProperty('firstname',updateUserData.data.userData.firstname);
        expect(updateResp).toHaveProperty('lastname',updateUserData.data.userData.lastname);
        expect(updateResp).toHaveProperty('email',updateUserData.data.userData.email);
        expect(updateResp).toHaveProperty('role',updateUserData.data.userData.role); 
        done();
    }catch(error){
        expect(error).toEqual(expect.any(Error));
        done(error);
    }
});