//UserRoleAndPermissionsModel
const { Model } = require('../knex');

class RoleAndPermissionsModel extends Model{
    static get tableName(){
        return 'role_and_permissions';
    }

    static get idColumn(){
        return 'id';
    }

    static async isRoleUnique(role,knex) {
        var countRes = await this.query(knex)
            .where({'role': role,'isDelete':0})
             .orWhere({'role': role.toLowerCase(),'isDelete':0})
            .count('id').first()
        console.log("countRes",countRes)
        return (countRes.count > 0) ? false : true; //returns false if role already exists
    }

    static get relationMappings(){
        
        return {
            user : {
                relation : Model.HasManyRelation,
                modelClass : require('../user/user.model'),
                join : {
                    from : 'role_and_permissions.id',
                    to : 'users.role_id'
                }
            }

        }
    }
}

module.exports = RoleAndPermissionsModel;