const fs = require('fs');
const path = require('path');

module.exports = {
    comoComprar: (req, res) => {
        return res.render('como-comprar')
    },
    devoluciones: (req, res) => {
        return res.render('cambios-devoluciones')
    },
    formasDePago: (req, res) => {
        return res.render('formas-pagos')
    },
    condiciones: (req, res) => {
        return res.render('terminos')
    },
    calidad: (req, res) => {
        return res.render('politicas-calidad')
    },
    nosotros: (req, res) => {
        return res.render('nosotros')
    }
}