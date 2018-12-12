const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema ({
    
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user', 
        required:true},

    product:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:'product', 
        required:true},

    qtd:{type: Number, required:true, default:1}

});

    module.exports = mongoose.model('user', userSchema);