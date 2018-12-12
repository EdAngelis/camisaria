const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema ({
    
    name:{type:String, required:true,},
    description:{type:String, required:true},
    img:{type:String, required:true},
    valor:{type:Number, required:true}
});

    module.exports = mongoose.model('product', productSchema);