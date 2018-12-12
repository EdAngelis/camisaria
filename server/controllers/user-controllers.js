const HttpStatus = require ('http-status');
const userSchema = require('../models/user-model');
const bcrypt = require('bcrypt');
const auth = require('../services/authentication');
const repository = require('../repository/user-repository');

exports.getUser = async (req, res, next)=>{
   const data = await auth.decode(req);
   await userSchema.findOne({'_id':data._id})
    .then(data=>{
        res.status(HttpStatus.OK).send(data);
    }).catch(erro=>{
        res.status(HttpStatus["400_MESSAGE"]).send(erro);
    })
   
    
}

exports.registerUser = async (req, res, next)=>{
    repository.registerUser(req.body);
    const token = await auth.genToken({
            _id: req.body._id,
            name: req.body.name,
            email: req.body.email,
            roles: req.body.roles
        });   
        console.log(token);
        return res.json({ token });

};

exports.login = async (req, res, next)=>{
    const userLogin = await userSchema.findOne({'email':req.body.email}).select('+password');
    const loginAuth = await bcrypt.compareSync(req.body.password , userLogin.password);
        if (loginAuth){
            const token  = await auth.genToken({
                _id: userLogin._id,
                name: userLogin.name,
                email: userLogin.email,
                roles: userLogin.roles
            });
            
                console.log(token);
                userLogin.password = undefined
                res.json({ token});
        }else{
            console.log("Senha Não Confere");
        }
        
    }
        

