 const fs = require('fs');
 const path = require('path');
 
 
 module.exports = {
    index: (req,res)=>{
        return res.render('home', {title: 'Pet Society'})
    },
    cart: (req,res)=> {
        return res.render('carrito',{title: 'carrito'})
    }
 }