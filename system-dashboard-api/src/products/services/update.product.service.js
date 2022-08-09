const ProductModel = require('../product.model');
const dateHelper = require('../../shared/helpers/date.helper');
const { json } = require('express');



const execute = async (data,knex)=>{
    // console.log("dataUpdate",data)
/*try{
        return await ProductModel.query(knex)
    .findById(8)
     .patch({
      name:'standard',
      identifier:'premium'
    });
    }*/
   try{
    data.updatedAt = dateHelper.getTimeStamps().updatedAt;
        const toUpdateId = data.id;
        data.exclusivePath = JSON.stringify(data.exclusivePath)

        // delete data.id;
        // delete data.name;
        //delete data.identifier
       

        return await ProductModel.query(knex).patchAndFetchById(toUpdateId,data);
        
    }
    catch(error)
    {
        console.log(error);
        throw Error(error.message);
    }
}


    
 

module.exports = {
    execute
}