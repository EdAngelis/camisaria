const router = require('express').Router();

router.get('/', (req, res, next) =>{
    res.status(200).send({status: 'Rota funcionando'});
    const inStorage = localStorage.getItem('token');
    console.log(inStorage);
    });

module.exports = router;