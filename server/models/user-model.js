const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    
    name:{type:String, required:true,},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true, select:false},
    confirmPass:{ type:String},
    roles: {type: String, enum:['user','admin'], default:'user'}
    
});

    module.exports = mongoose.model('user', userSchema);