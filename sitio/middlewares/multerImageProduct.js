const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination : (req, file, cb) =>{
        cb(null, './public/img/products')
    },
    filename : (req, file, cb) =>{
        cb(null, 'img-producto' + Date.now() + path.extname(file.originalname))
    }
});
const upload = multer({storage});

module.exports = upload;