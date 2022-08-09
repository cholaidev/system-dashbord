//RefreshTokenModel
const { Model } = require('../knex');

class RefreshTokenModel extends Model{
    static get tableName(){
        return 'systemUserRefreshTokens';
    }

    static get relationMappings(){
        const UserModel = require('./user.model')

        return {
            user : {
                relation : Model.BelongsToOneRelation,
                modelClass : UserModel,
                join : {
                    from : 'systemUserTokens.systemUserId',
                    to : 'users.id'
                }
            }

        }
    }
}

module.exports = RefreshTokenModel;