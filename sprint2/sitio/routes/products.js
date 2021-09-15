var express = require('express');
var router = express.Router();

/* GET products page. */
const {detail, add} = require('../controllers/productsController');
router.get('/detail/:id', detail)
router.get('/add', add)

module.exports = router;
