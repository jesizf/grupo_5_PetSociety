var express = require('express');
var router = express.Router();

/* GET home page. */
const {index,cart, admin}=require('../controllers/mainController');
router.get('/', index)
router.get('/carrito', cart)
router.get('/admin', admin)
module.exports = router;
