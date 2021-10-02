const {body,check} = require('express-validator');
const users = require('../data/users.json');
module.exports = [
    check('email')
    .notEmpty()
    .withMessage('Ingrese un correo electronico'),

    check('pass')
    .notEmpty()
    .withMessage('Ingrese contraseña'),

    
    
]