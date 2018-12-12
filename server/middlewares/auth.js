const config = require('../config');
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next)=>{
    const authHeader = await req.headers["authorization"];
    if (typeof authHeader !== 'undefined'){
        const bearer  = authHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        jwt.verify(req.token, config.secretKey, function (error, data){
            if(error){
                res.sendStatus(403);
            }else{
                next();
            }
        })
        
    } else{
        res.sendStatus(403);
    }
}
      

