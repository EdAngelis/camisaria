const express = require('express');
const config = require('./config')
const routesUser = require('../server/routes-controllers/routes-user');
const routesProduct = require('../server/routes-controllers/routes-product');
const indexRoute = require('../server/routes-controllers/index-route');
const mongoose = require('mongoose');
const app = express();

mongoose.connect(config.mongodb_LocalConection, { useNewUrlParser: true });

app.set('port', process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', indexRoute);
app.use('/user', routesUser);
app.use('/product', routesProduct);

app.listen(app.get('port'),()=>{
    console.log('Servidor Funcionando na Porta:', + app.get('port'));
    
});






