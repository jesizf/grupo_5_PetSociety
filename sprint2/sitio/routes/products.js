var express = require('express');
var router = express.Router();

/* GET products page. */
const {detail, add,edit} = require('../controllers/productsController');
router.get('/detail/:id', detail)
router.get('/add', add)
router.get('/edit/:id', edit)
router.get('/update/:id', edit)

module.exports = router;
