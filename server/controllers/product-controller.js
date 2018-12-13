const productSchema = require('../models/products-model');


exports.addProductInCart = (req, res, next)=>{
    productSchema.findOne({name:req.params.name})
    .then(data=>{
        res.status(200).send(data);
    }).catch(error=>{
        res.status(400).send(error);
    })    
}

exports.registerProduct = (req, res, next)=>{
    const addProduct = new productSchema(req.body);
    addProduct.save();

}

        