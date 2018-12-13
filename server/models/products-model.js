const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema ({
    
    cod:{type: Number, required:true, unique:true },
    name:{type:String, required:true, unique:true},
    description:{type:String, required:true},
    img:{type:String, required:true},
    value:{type:Number, required:true}
});

    module.exports = mongoose.model('product', productSchema);