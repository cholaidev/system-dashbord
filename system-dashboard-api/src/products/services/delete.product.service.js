const ProductModel = require('../product.model');

const execute = async(id,knex) => {
    try{
        return await ProductModel.query(knex).deleteById(id);
       // if(findProject && findProject.id){
            // await ProjectModel.query(knex).deleteById(projectId);
            // const toDeleteId = data.id;
            // await ProductModel.query(knex).patchAndFetchById(toDeleteId,data)//.where({'id':id}).patch({isDelete:true});
            // return true;
       // }
       /* else{
            throw Error("No project found for the given ID");
        }*/
    }catch(error){
        throw Error(error.message);
    } 
}

module.exports = {
    execute
};