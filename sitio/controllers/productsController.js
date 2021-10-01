const fs = require('fs');
const path = require('path');

let  products = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'));
let  categories = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','categories.json'),'utf-8'));
const firstLetter = require('../utils/firstLetter');
const {validationResult} = require('express-validator')

const pesoProducts = require('../data/pesoProducts.json');

module.exports = {
    add : (req,res) => {
        return res.render('productAdd',{ title: 'Agregar Productos',
            products,
            categories,
            firstLetter,
            pesoProducts
        })
        
    },
    store : (req,res) => {
        let errors = validationResult(req);
        
        

        let images = req.files.map(image => image.filename)

        if (errors.isEmpty()) {
            const {name,description,price,category} = req.body;
            let product = {
                id : products[products.length - 1].id + 1,
                name : name.trim(),
                description : description.trim(),
                price : +price,
                category,
                pesoProducts,
                image : req.files.length != 0 ? images : ['default.jpg'],
                
            }
    
            products.push(product);
    
            fs.writeFileSync(path.join(__dirname,'..','data','products.json'),JSON.stringify(products,null,3),'utf-8');
    
            return res.redirect('/admin')
        }else{
            return res.render('productAdd',{
            products,
            categories,
            firstLetter,
            pesoProducts,
            errors : errors.mapped(),
            old : req.body
          
            })
            
        }
        
    },

    detail : (req, res) =>{
        return res.render('detail',{
            title: 'Detalles de productos',
            products : products.find(product => product.id === +req.params.id)
            
        })
    },
    edit : (req, res) =>{
        return res.render('productEdit',{
            title: 'Editar productos',
            product : products.find(product => product.id === +req.params.id),
            categories,
            firstLetter,
            pesoProducts,
        })  ;
    },
    
    update: (req, res) => 
    {
		const {name, price, category, description} = req.body
		let productModified = {
			id: +req.params.id,
			name: name.trim(),
			price: +price,
			category,
			description: description.trim(),
			image: 'default-image.png'
		}
		let productsModified = products.map(product => product.id === +req.params.id ? productModified : product);

		fs.writeFileSync(path.join(__dirname, '..', 'data', 'products.json'),JSON.stringify(productsModified, null,3),'utf-8');
		res.redirect('/products/detail/' + req.params.id);
		
		
	},
    search : (req,res) => res.render('admin',{
        title : 'Resultado de la búsqueda',
        products,
        categories,
        firstLetter,
        products : products.filter(product => product.name.toLowerCase().includes(req.query.search.toLowerCase()))
    }),
    filter : (req,res) => res.render('admin',{
        title : 'Categoría: ' + req.query.category,
        categories,
        products : products.filter(product => product.category === req.query.category)
    }),
    destroy : (req, res) => 
    
    {
        let product = products.find(product => product.id === +req.params.id);

        product.image.forEach(img => {
            fs.existsSync(path.join(__dirname,'../public/img/products',img)) ? fs.unlinkSync(path.join(__dirname,'../public/img/products',img)) : null
            
        });

		let productsModified = products.filter(product => product.id !== +req.params.id);
		
		fs.writeFileSync(path.join(__dirname, '..', 'data', 'products.json'),JSON.stringify(productsModified, null,3),'utf-8');
        res.redirect('/admin');
        

	}

}