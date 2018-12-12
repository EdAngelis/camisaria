const router = require('express').Router();
const userCtrl = require('../controllers/user-controllers');
const authorization = require('../services/authentication');

router.get('/', authorization.authorization, userCtrl.getUser );
router.post('/',  userCtrl.registerUser);
router.post('/lg',  userCtrl.login);


module.exports = router;