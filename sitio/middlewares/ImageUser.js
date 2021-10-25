const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination : (req, file, cb) =>{
        cb(null, './public/img/users')
    },
    filename : (req, file, cb) =>{
        cb(null, 'image' + Date.now() + path.extname(file.originalname))
    }
});
const upload = multer({storage});

module.exports = upload;