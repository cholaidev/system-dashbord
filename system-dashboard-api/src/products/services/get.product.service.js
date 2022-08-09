const ProductModel = require('../product.model');


const execute = async (queryParam, req) => {
    try {

        return await ProductModel.query().select('*');
    } catch (error) {
        console.log(error);
        throw Error(error.message);
    }
}
module.exports = {
    execute
};

