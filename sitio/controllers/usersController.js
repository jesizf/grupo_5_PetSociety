const fs = require('fs');
const path = require('path');


module.exports = {
    
        login: (req, res) => {
            return res.render('login',{title: 'login'})
        },
        register: (req, res) => {
            return res.render('register',{title: 'register'})
        } 
    }
