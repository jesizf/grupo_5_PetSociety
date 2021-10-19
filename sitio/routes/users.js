var express = require('express');
var router = express.Router();
const registerValidator = require('../validations/registerValidator');
const {register,processRegister, login} = require ('../controllers/usersController');

/* /users */
router.get('/register', register);
router.get('/login', login);
/*router.get('/register',notEntry, register)*/
router.post('/register',registerValidator,processRegister)

module.exports = router;
