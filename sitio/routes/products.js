var express = require('express');
var router = express.Router();
const upload = require('../middlewares/multerImageProduct');

/* GET products page. */
const {detail, add,edit, search, store} = require('../controllers/productsController');


const productValidator = require('../validations/productsValidator')

router.get('/detail/:id', detail)
router.get('/add', add)
router.post('/add',upload.array('image'), productValidator ,store)
router.get('/edit/:id', edit)
router.get('/update/:id', edit)
router.get('/search',search)


module.exports = router;
