const { Model } = require('../knex');

class UserModel extends Model{
    static get tableName(){
        return 'users';
    }

    static get idColumn(){
        return 'id';
    }
    // static async isEmailExists(email,knex) {
    //     var countRes = await this.query(knex)
    //         .where('email', email)
    //         .count('id').first();
        
    //     return (countRes.count > 0) ? true : false; //returns true if email already exists
    // }

    // static async isEmailUnique(email,knex) {
    //     var countRes = await this.query(knex)
    //         .where({'email': email,isDelete:0})
    //         .count('id').first();
        
    //     return (countRes.count > 0) ? false : true; //returns false if email already exists
    // }

    static get relationMappings(){
       
        return {
            // tokens : {
            //     relation : Model.HasManyRelation,
            //     modelClass : require('./token.model'),
            //     join : {
            //         from : 'users.id',
            //         to : 'tokens.userId'
            //     }
            // },
            // refreshTokens : {
            //     relation : Model.HasManyRelation,
            //     modelClass : require('./refresh.token.model'),
            //     join : {
            //         from : 'users.id',
            //         to : 'refreshTokens.userId'
            //     }
            // },
            // userTeams : {
            //     relation : Model.ManyToManyRelation,
            //     modelClass : require('../team/team.model'),
            //     join: {
            //         from: 'users.id',
            //         through: {
            //             modelClass : require('../team/teams.users.model'),
            //             from: 'teams_users.userId',
            //             to: 'teams_users.teamId'
            //         },
            //         to: 'teams.id',
            //     }
            // },
            // userProjects : {
            //     relation : Model.ManyToManyRelation,
            //     modelClass : require('../project/project.model'),
            //     join: {
            //         from: 'users.id',
            //         through: {
            //             modelClass : require('../project/projects.users.model'),
            //             from: 'teams_users.userId',
            //             to: 'teams_users.teamId'
            //         },
            //         to: 'teams.id',
            //     }
            // },
            userRoleAndPermissions : {
                relation : Model.BelongsToOneRelation,
                modelClass : require('../role_and_permissions/role.and.permissions.model'),
                join : {
                    from : 'users.role_id',
                    to : 'role_and_permissions.id'
                }
            },
            // userForgotVerficationCodes : {
            //     relation : Model.HasManyRelation,
            //     modelClass : require('./user.verfication.codes.model'),
            //     join : {
            //         from : 'users.id',
            //         to : 'user_verfication_codes.userId'
            //     }
            // }
        }
    }
}

module.exports = UserModel;