const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination : (req, file, cb) =>{
        cb(null, './public/img/products')
    },
    filename : (req, file, )
})