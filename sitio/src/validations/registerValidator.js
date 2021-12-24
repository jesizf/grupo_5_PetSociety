const {body,check} = require('express-validator');
const users = require('../data/users.json');

module.exports = [

    check('name')
        .notEmpty().withMessage('El nombre es requerido')
        .isLength({
            min : 5,
            max : 30
        }).withMessage('El nombre debe tener un mínimo de 5 y un máximo de 30 caracteres'),


    check('email')
        .notEmpty().withMessage('Debes ingresar tu email').bail()
        .isEmail().withMessage('Email inválido'),

    body('email')
        .custom(value  => {
            let user = users.find(user => user.email === value);
            if(user){
                return false
            }else{
                return true
            }
        }).withMessage('el email ya se encuentra registrado'),

    check('password')
        .isLength({
            min : 8,
            max : 12
        }).withMessage('La contraseña debe tener un mínimo de 8 y un máximo de 12 caracteres')
        .notEmpty().withMessage('Debes ingresar contraseña'),
    
    body('pass2')
        .custom((value,{req}) => {
            if(value !== req.body.password){
                return false
            }else{
                return true
            }
        }).withMessage('Las contraseñas no coinciden')
        .notEmpty().withMessage('Debes reingresar contraseña'),

    check('terms')
    .isString('on').withMessage('Debes aceptar los términos y condiciones')
    
]