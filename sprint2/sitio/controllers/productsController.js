const fs = require('fs');
const path = require('path');
let  products = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'));
let  categories = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','categories.json'),'utf-8'));
const firstLetter = require('../utils/firstLetter');
const pesoProducts = require('../data/pesoProducts.json')
module.exports = {
    add : (req,res) => {
        return res.render('productAdd',{ title: 'Agregar Productos',
            products,
            categories,
            firstLetter,
            pesoProducts
        })
    },
    detail : (req, res) =>{
        return res.render('detail',{
            title: 'Detalles de productos',
            products : products.find(product => product.id === +req.params.id)
            
        })
    }
}