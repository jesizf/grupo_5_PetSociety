const fs = require('fs');
const path = require('path');


module.exports = {
    
        login: (req, res) => {
            return res.render('login',{title: 'login'})
        },
        register: (req, res) => {
            return res.render('register',{title: 'register'})
        },
        processRegister : (req,res) => {
            /*let errors = validationResult(req);
    
            if(errors.isEmpty()){
                const {name,email,password} = req.body;
                let user = {
                    id : users.length != 0 ? users[users.length - 1].id + 1 : 1,
                    name : name.trim(),
                    email : email.trim(),
                    password : bcrypt.hashSync(password,10),
                    avatar : 'default.png',
                    rol : "user"
                }
                users.push(user);
                fs.writeFileSync(path.join(__dirname,'../data/users.json'),JSON.stringify(users,null,3),'utf-8');
                
                req.session.userLogin = {
                    id : user.id,
                    name : user.name,
                    avatar : user.avatar,
                    rol : user.rol
                }
                
                return res.redirect('/')
            }else{
                return res.render('register',{
                    errores : errors.mapped(),
                    old : req.body
                })
            }
          
        },*/return res.send(req.body)}
    }
