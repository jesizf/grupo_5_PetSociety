var express = require('express');
var router = express.Router();

/* GET home page. */
const {index,cart}=require('../controllers/mainController');
router.get('/', index)
router.get('/carrito', cart)
module.exports = router;
