const {body} = require('express-validator');
const users = require('../data/users.json');
const bcrypt = require('bcryptjs')
module.exports = [
    body('email')
    .custom((value,{req})=>{
        let user = users.find(user => user.email === value && bcrypt.compareSync(req.body.pass,user.pass));
        if(user){
            return true
        }else{
            return false
        }
    }
    ).withMessage('Credenciales inválidas')    
]

