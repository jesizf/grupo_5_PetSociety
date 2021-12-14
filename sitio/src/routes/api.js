let express = require('express');
let router = express.Router();
const upload = require('../middlewares/multerImageProduct');



const {deleteImage, addImage} = require('../controllers/apiController');

const {show, add, remove, empty} = require('../controllers/cartApiController')

router.post('/delete-image/:id',deleteImage);
router.post('/add-images/:id',upload.any(),addImage)

// carrito
router.get('/carts/show', show);
router.get('/carts/add/:id', add);
router.get('/carts/remove/:id', remove);
router.get('/carts/empty', empty);


module.exports = router;