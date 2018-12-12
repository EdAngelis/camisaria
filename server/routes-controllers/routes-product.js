const router = require('express').Router();
const productCtrl = require('../controllers/product-controller');

router.get('/addCart:name', productCtrl.addProductInCart );
router.post('/', productCtrl.registerProduct);

module.exports = router;