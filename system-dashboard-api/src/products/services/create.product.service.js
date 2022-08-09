const ProductModel =require('../product.model');

const execute =async (data,knex) =>{
    try{
        data.exclusivePath = JSON.stringify(data.exclusivePath)
        return await ProductModel.query(knex).insert(data).returning('*');
    }catch(error)
    {
        throw Error (error.message);
            
    }
}

module.exports =
{
    execute
}