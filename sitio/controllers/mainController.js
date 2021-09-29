 const fs = require('fs');
 const path = require('path');

 let  products = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'));
 
 

 
 
 module.exports = {
    index: (req,res)=>{
        let productsPerros = products.filter(products => products.category === 'perro');
        let productsGatos = products.filter(products => products.category === 'gato');
        return res.render('home', {title: 'Pet Society', 
       products : JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8')),
       productsPerros,
       productsGatos,
    })
    
    },
    cart: (req,res)=> {
        return res.render('carrito',{title: 'carrito'})
    },
    admin: (req,res)=>{
    return res.render('admin', {title: 'admin',
    products:JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8')),
    products})


}
 }