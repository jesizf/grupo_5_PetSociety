var express = require('express');
var router = express.Router();



/* GET home page. */
const {index,cart, admin}=require('../controllers/mainController');

const adminUserCheck = require('../middlewares/adminUserCheck')

router.get('/', index)
router.get('/carrito', cart)
router.get('/admin', adminUserCheck ,admin)
module.exports = router;
