var express = require('express');
var router = express.Router();

/*validaciones*/

const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidator');
const profileValidator = require('../validations/profileValidator')

/*middlewares*/
const userLoginCheck = require('../middlewares/userLoginCheck');
const ImageUser = require('../middlewares/ImageUser');
const logueoCheck = require('../middlewares/logeoCheck')

const {register,processRegister, login, processLogin, profile, logout, updateProfile} = require('../controllers/usersController');


/* /users */
router.get('/register', logueoCheck, register);
router.post('/register',registerValidator,processRegister)
router.get('/login', logueoCheck, login);
router.post('/login',loginValidator, processLogin)
router.get('/profile', userLoginCheck, profile);
router.put('/profile/:id',ImageUser.single('image'), profileValidator, updateProfile);
router.get('/logout', userLoginCheck, logout)


module.exports = router;
