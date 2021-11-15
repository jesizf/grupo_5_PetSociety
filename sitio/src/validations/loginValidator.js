
const {body} = require('express-validator');
const db = require('../database/models');
const bcrypt = require('bcryptjs')

   

module.exports = [
    body('email')
<<<<<<< HEAD
    .custom((value,{req})=>{
        let user = users.find(user => user.email === value && bcrypt.compareSync(req.body.pass,user.pass));
        if(user){
            return true
        }else{
            return false
        }
    }
    ).withMessage('Credenciales inválidas')    
=======
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
>>>>>>> f570420c031c401b8f08f2030bdb35106b9a50d7
]







