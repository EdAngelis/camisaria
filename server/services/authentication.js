'use strict'
const jwt = require('jsonwebtoken');
const config = require('../config');

exports.genToken = async (data) =>{
    return jwt.sign(data, config.secretKey, {expiresIn: 300})
}

exports.authorization = function (req, res, next){
    const headerToken = req.headers['authorization'];
    if(!headerToken){
        res.status(401).json({
            message:'Acesso Restrito'
        });
    }else{
        const bearer  = headerToken.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        jwt.verify(req.token, config.secretKey, function(error, decoded){
            if (error){
                res.status(401).json({
                    message: 'Token Inválido'
                });
            }else{
                next();
            }})}}

        exports.decode = async (req)=>{
            const token = req.headers['authorization'];
            const bearer = await token.split(" ");
            const bearerToken = await bearer[1];
            const data = await jwt.verify(bearerToken, config.secretKey);
            return data;
        };

        exports.adminAuthorization = function (req, res, next){
            const headerToken = req.headers['authorization'];
            if(!headerToken){
                res.status(401).json({
                    message:'Acesso Restrito'
                });
            }else{
                const bearer  = headerToken.split(" ");
                const bearerToken = bearer[1];
                req.token = bearerToken;
                jwt.verify(req.token, config.secretKey, function(error, decoded){
                    if (error){
                        res.status(401).json({
                            message: 'Token Inválido'
                        });
                    }else{
                        if(decoded.roles.includes('admin')){
                            next();
                        }else{
                            res.status(401).json({
                                message:'Esta Funcionalidade é para Admins'
                            })
                        }
                    
                    }})}}