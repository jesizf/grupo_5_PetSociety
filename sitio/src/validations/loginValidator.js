
const {body} = require('express-validator');
const db = require('../database/models');
const bcrypt = require('bcryptjs')

   

module.exports = [
    body('email')
    .custom((value,{req}) => {
    
        return db.User.findOne({
            where :{
                email : value,
              
            }
        })
        .then(user => {
            if (bcrypt.compareSync(password, user.password) === req.body) {
                req.session.user = {
                    id: user.id,
                    name: user.name,
                    image: user.image,
                    rol: user.rolId
                }
                res.redirect('/')
               
            } console.log(user);
        }) 
        .catch(error => console.log(error))
        
    })
]







