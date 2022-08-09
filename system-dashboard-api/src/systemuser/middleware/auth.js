const UserModel = require('../user.model');
const TokenModel = require('../token.model');
const jwtHelper = require('../helpers/jwt.helper');
const filterProfileData = require('../helpers/filter.user.data.helper').filterProfileResponse;


const auth = async(req, res, next) => {
    const authHeader = req.header('Authorization')
    if(!authHeader){
        res.status(400).send('No Auth Header');    
    }else{
        const token = authHeader.replace('Bearer ', '');
    
        try{
            const data = jwtHelper.verifyToken(token);
            try {
                const tokenUser = await TokenModel.query().findOne({ systemUserId : data.id, token : token })
                if (!tokenUser) {
                    res.status(400).send('Invalid token');
                }
                const user = await UserModel.query().findOne({ id: data.id });
                req.user = await filterProfileData(user);
                next();
            } catch (error) {
                res.status(401).send({ error: 'Not authorized to access this resource' });
            }
        }
        catch (error) {
            console.log(error);
            res.status(401).send(error.message);
        }
    }
}

module.exports = auth