const fs = require('fs');
const path = require('path');
const users = require(path.join(__dirname, '../data/users.json'));

const {validationResult} = require('express-validator')

module.exports = {
    
        login: (req, res) => {
            return res.render('login',{title: 'login'})
        },
        register: (req, res) => {
            return res.render('register',{title: 'register'})
        },

        processLogin: (req, res) =>{
            let errors = validationResult(req);
            if(errors.isEmpty()){
                let user = users.find(user => user.email === req.body.email);
                req.session.useLogin = {
                    id : user.id,
                    name : user.name,
                    avatar : user.avatar,
                    rol : user.rol
                }
                return res.redirect('/')
            }else{
                return res.render('login',{
                    title: 'login',
                    errores : errors.mapped()
                })
            }
        }
    }
