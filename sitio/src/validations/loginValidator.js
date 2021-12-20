const {body,check} = require('express-validator');
const db = require('../database/models');
const bcrypt = require('bcryptjs')

    
module.exports = [
        check('email')
        .notEmpty().withMessage('Debes ingresar tu email').bail()
        .isEmail().withMessage('Email inválido'),
    
        check('password')
        .notEmpty().withMessage('Debes ingresar tu contraseña'),
        
    body('password')
        .custom((value,{req}) => {
            console.log(req.body)
            return db.User.findOne({
                where : {
                    email : req.body.email,
                }
            })
                .then(user => {
                    if(!user || !bcrypt.compareSync(req.body.password, user.password)){
                        return Promise.reject()
                    }
                }).catch( () => Promise.reject('email o clave incorrectas'))
        })
]
