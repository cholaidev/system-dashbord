const UserModel = require('../user.model');
const execute = async(queryParams = '',knex) => {
    try{
        var filters = {};
        if(queryParams.userId){
            filters.id = queryParams.userId;
        }
        if(queryParams.roleId){
            filters.role_id = queryParams.roleId;
        }
       
        if(queryParams.getAllUser){
            const users = await UserModel.query(knex)
            .where(filters)
            .select(["id","firstname","lastname", "email", "status", "profilePicUrl","isDelete","createdAt","updatedAt"])
            .withGraphFetched('[userRoleAndPermissions(selectFields) as role]')
            .modifiers({
              selectFields(builder) {
                  builder.select(["id","role as name","permissions"])
              }
            });
        
            return users;
        }
        else{
            const users = await UserModel.query(knex)
            .where(filters)
            .select(["id","firstname","lastname", "email", "status", "profilePicUrl","createdAt","updatedAt"])
            .withGraphFetched('[userRoleAndPermissions(selectFields) as role]')
            .where({
                'users.isDelete': 0,
              })
            .modifiers({
              selectFields(builder) {
                  builder.select(["id","role as name","permissions"])
              }
            });
        
            return users;
        }
      
    }catch(error){
        throw Error(error.message);
    } 
}

module.exports = {
    execute
};