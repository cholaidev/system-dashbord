const LoggerModel = require('../logger.model');
const { loggerKnex } = require('../../knex');

const execute = async (queryParams) => {
    try {
        var filters = {};
        if (queryParams.id) {
            filters.tenant_id = queryParams.id;
        }
        if(queryParams.getAllLogger){
            let result = await LoggerModel.query(loggerKnex).where(filters)
            return result
        }
        else{
            var per_page = queryParams.per_page || 10;
            var page = queryParams.page || 1;
            if (page < 1) page = 1;
            var offset = (page - 1) * per_page;
            const count = await LoggerModel.query(loggerKnex).where(filters).count().first()
            let result = await LoggerModel.query(loggerKnex).where(filters).offset(offset).limit(per_page)
            return {data:result,per_page:Number(per_page),offset:Number(offset),page:Number(page),count:Number(count.count)}
        }

    }
    catch (error) {
        console.log(error);
        throw Error(error.message);
    }
}
module.exports = {
    execute
};