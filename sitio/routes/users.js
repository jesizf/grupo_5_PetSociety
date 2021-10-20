var express = require('express');
var router = express.Router();
const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidator');

const {register,processRegister, login, processLogin, logout} = require('../controllers/usersController');

/* /users */
router.get('/register', register);
router.get('/login', login);
router.post('/login',loginValidator, processLogin)
/*router.get('/register',notEntry, register)*/
router.post('/register',registerValidator,processRegister)
router.get('/logout', logout)

module.exports = router;
