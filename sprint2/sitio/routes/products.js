var express = require('express');
var router = express.Router();

/* GET products page. */
const {detail, add,edit, search, store} = require('../controllers/productsController');
router.get('/detail/:id', detail)
router.get('/add', add)
router.post('/add',store)
router.get('/edit/:id', edit)
router.get('/update/:id', edit)
router.get('/search',search)

module.exports = router;
