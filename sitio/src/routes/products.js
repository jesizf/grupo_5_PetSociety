var express = require('express');
var router = express.Router();
const upload = require('../middlewares/multerImageProduct');

/* GET products page. */
const {detail, add, store, edit, update, search, destroy} = require('../controllers/productsController');

const adminUserCheck = require('../middlewares/adminUserCheck')

const productValidator = require('../validations/productsValidator')

router.get('/detail/:id', detail)
router.get('/add',adminUserCheck, add)
router.post('/add',upload.array('image'), productValidator ,store)
router.get('/edit/:id',adminUserCheck, edit)
router.put('/update/:id',upload.array('image'), productValidator ,update)
router.get('/search',search)

router.delete('/destroy/:id', destroy);


module.exports = router;
