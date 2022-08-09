//validator
const getProductValidator = require('./validators/get.product.validator')
const createProductValidator = require('./validators/create.product.validator')
const updateProductValidator = require('./validators/update.product.validator')
const deleteProductValidator = require('./validators/delete.product.validator')
//options
const validationOptions =require('../shared/options/joi.options')

//service
const getProductService =require('./services/get.product.service')
const createProductService =require('./services/create.product.service')
const updateProductService =require('./services/update.product.service')
const deleteProductService  =require('./services/delete.product.service')

const get = async (req, res) => {

    let { error } = getProductValidator.validationSchema.validate(req.query, validationOptions); //validate by passing create validation schema and req.body
    if (error) {
        res.status(400).send(error.details); // error block
    } else {

        const getProducts = await getProductService.execute(req.query,req);//create service

        res.status(201).send(getProducts)


    }
}



const create = async (req, res) => {
    let{error}=createProductValidator.validationSchema.validate(req.body,validationOptions);
    if(error){
        res.status(400).send(error.details);
    }else{
        const createProject = await createProductService.execute(req.body,req.knex);
        res.status(201).send(createProject);
    }


}

const update = async(req,res)=>{
    let{error}=updateProductValidator.validationSchema.validate(req.body,validationOptions);
    if(error){
        res.status(400).send(error.details);
    }else{
        const updatedProject = await updateProductService.execute(req.body,req.knex);
        res.status(201).send(updatedProject);
    }



}

const del = async(req,res)=>{ //optional method

    let { error } = deleteProductValidator.validationSchema.validate(req.query,validationOptions);
    if(error){
        res.status(400).send(error.details);
    }else{
        
            await deleteProductService.execute(req.query.id,req.knex);//delete service
            res.status(201).send("Archived project successfully");
       
    }

}

module.exports={
    get,
    create,
    update,
    del
}

