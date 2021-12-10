let express = require('express');
let router = express.Router();
const upload = require('../middlewares/multerImageProduct');



const {deleteImage, addImage} = require('../controllers/apiController');

const {show, add, remove, empty} = require('../controllers/cartApiController')

router.post('/delete-image/:id',deleteImage);
router.post('/add-images/:id',upload.any(),addImage)

// carrito
router
      .get('/cart/show', show)
      .post('/cart/add/:id', add)
      .get('/cart/remove/:id', remove)
      .get('/cart/empty', empty)


module.exports = router;