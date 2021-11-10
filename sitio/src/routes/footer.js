var express = require('express');
var router = express.Router();

const {comoComprar, devoluciones, formasDePago, condiciones, calidad, nosotros} = require('../controllers/footerController')

router.get('/como-comprar', comoComprar);
router.get('/cambios-y-devoluciones', devoluciones);
router.get('/formas-de-pago', formasDePago);
router.get('/terminos-y-condiciones', condiciones);
router.get('/politicas-de-calidad', calidad);
router.get('/nosotros', nosotros);
module.exports = router;

