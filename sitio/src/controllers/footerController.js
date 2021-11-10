

module.exports = {
    comoComprar: (req, res) => {
        return res.render('como-comprar', {title: 'Como Comprar'})
    },
    devoluciones: (req, res) => {
        return res.render('cambios-devoluciones', {title: 'Cambios y Devoluciones'})
    },
    formasDePago: (req, res) => {
        return res.render('formas-pagos', {title: 'Devoluciones'})
    },
    condiciones: (req, res) => {
        return res.render('terminos', {title: 'Terminos y Condiciones'})
    },
    calidad: (req, res) => {
        return res.render('politicas-calidad', {title: 'Políticas de Calidad'})
    },
    nosotros: (req, res) => {
        return res.render('nosotros', {title: 'Quienes Somos'})
    }
}