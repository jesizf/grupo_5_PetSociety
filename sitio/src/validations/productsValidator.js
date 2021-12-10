const {check} = require('express-validator');

module.exports = [
    check('name')
    .notEmpty()
    .withMessage('El nombre del producto es obligatorio'),

    check('price')
    .isInt({min:1})
    .withMessage('Ingrese un número válido'),

    check('category')
.notEmpty().withMessage('indicá la categoría'),

    check('weigh')
    .notEmpty().withMessage('Indicá el peso'),

    check('description')
    .notEmpty()
    .withMessage('La descripcion es obligatoria')
    .bail() .isLength({ min: 10})
    .withMessage('La descripcion debe tener mímino 15 caracteres'),
    
]