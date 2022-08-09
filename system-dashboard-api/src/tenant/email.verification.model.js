const { Model } = require('../knex');

class EmailVerificationModel extends Model{
    static get tableName(){
        return 'email_verification';
    }
    static get idColumn(){
        return 'id';
    }
    static async isEmailUnique(email,knex) {
        var countRes = await this.query(knex)
            .where('email', email)
            .count('id').first();
        
        return (countRes.count > 0) ? false : true; //returns false if email already exists
    }
    static async isEmailVerified(email,knex) {
        var countRes = await this.query(knex)
            .where({'email':email,'isVerified':true})
            .count('id').first();
        
        return (countRes.count > 0) ? false : true; //returns false if email already exists
    }
    static async isEmailWithinTime(email,knex,moment) {
        var res = await this.query(knex)
            .where({'email':email})
            .select('email', 'verifyWithin')
        if(res[0].verifyWithin>moment().utc())  {
            return  true ;
        } else{
            return false ;
        }
         //returns false if email already exists
    }
    

}

module.exports = EmailVerificationModel;

