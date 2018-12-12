const bcrypt = require('bcrypt');
const config = require('../config');
const userSchema = require('../models/user-model');
const auth = require('../services/authentication');

exports.registerUser = async (data) => {
    const senhaHash = bcrypt.hashSync(data.password, config.salt);
    const newUser = new userSchema ({
        name : data.name,
        email : data.email,       
        password : senhaHash,
    });
    return newUser.save()
}

exports.login = async (data)=>{
    
    
}