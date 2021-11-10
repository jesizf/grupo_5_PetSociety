const {body,check} = require('express-validator');


module.exports = [

    check('name')
        .notEmpty().withMessage('Debe ingresar un nombre'),
   
    body('pass')
        .custom(value => {
            if(value.length != 0){
                if(value.length < 6 || value.length > 12){
                    return false
                }else{
                    return true
                }
            }else{
                return true
            }
        }).withMessage('La contraseña debe tener un mínimo de 6 y un máximo de 12 caracteres'),
    
]

