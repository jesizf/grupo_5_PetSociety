 const fs = require('fs');
 const path = require('path');

 let  products = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'));
 
 const db = require('../database/models');
 const {Op} = require('sequelize')
 module.exports = {
    index: (req,res)=>{
      let perro = db.Product.findAll({
        where : {
          categoryId : {
            [Op.like] : 1
          }
        },
        limit : 8,
        include: ['images', 'category']
      })
      
      let gato = db.Product.findAll({
        where : {
          categoryId : {
            [Op.like] : 2
          }
        },
        limit : 8,
        include : ['images', 'category']
      })

      Promise.all([perro, gato])
      .then(([perro, gato]) =>{
        return res.render('home', {title: 'Pet Society', 
       perro,
       gato
    })
      })
    },


    cart: (req,res)=> {
        return res.render('carrito',{title: 'carrito'})
    },
    
    admin : (req,res) => {
      let products = db.Product.findAll({
          include : ['images','category', 'weigh']
      })
      let categories = db.Category.findAll()
      let weigh = db.Weigh.findAll()
    

      Promise.all([products,categories,weigh])
          .then(([products,categories,weigh]) => {
              return res.render('admin',{
                  title : "Administración",
                  products,
                  categories,
                  weigh
              })
          })
          .catch(error => console.log(error))
  
  }
}