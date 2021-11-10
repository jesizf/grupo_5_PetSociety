
const fs = require('fs');
const path = require('path');
const bcrypt=require('bcryptjs');
const users=require(path.join(__dirname,'../data/users.json'))

const {validationResult} = require('express-validator');


module.exports = {
    
        login: (req, res) => {
            return res.render('login',{title: 'login'})
        },
        processLogin: (req, res) =>{
    
            let errors = validationResult(req);

            if(errors.isEmpty()){
                let user = users.find(user => user.email === req.body.email);
                req.session.userLogin = {
                    id : user.id,
                    name : user.name,
                    image : user.image,
                    rol : user.rol
                }
                if(req.body.remember){
                    res.cookie('petsociety', req.session.userLogin,{maxAge : 2000 * 60})
                }
                
                return res.redirect('/')
            }else{
                return res.render('login',{
                    title: 'login',
                    errores : errors.mapped()
                })
            }
        },
        register: (req, res) => {
            return res.render('register',{title: 'register'})
        },
        
        processRegister : (req,res) => {
            let errors=validationResult(req);
            if (errors.isEmpty()){
                const {name,email,pass} = req.body;
                let user = {
                    id : users.length != 0 ? users[users.length - 1].id + 1 : 1,
                    name : name.trim(),
                    email : email.trim(),
                    pass : bcrypt.hashSync(pass,10),
                    image : 'default.png',
                    rol : "user"
                }
                users.push(user);
                fs.writeFileSync(path.join(__dirname,'../data/users.json'),JSON.stringify(users,null,3),'utf-8');
                
                req.session.userLogin ={
                    id : user.id,
                    name : user.name,
                    image : user.image,
                    rol : user.rol
                }
                return res.redirect('/')
            }
                else{
                    return res.render('register',{
                        title:'register',
                        errores : errors.mapped(),
                        old : req.body
                    })
                }
                    
                
            
                /*
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
          
        },return res.send(req.body)}*/
    },
    profile: (req, res) => {
        let users = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/users.json'), 'utf-8'));
        return res.render('profile',{title: 'profile',
        user : users.find(user => user.id === req.session.userLogin.id)
    })
    },
    updateProfile : (req,res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            let user = users.find(user => user.id === req.session.userLogin.id);
            let hashPassword = req.body.pass ? bcrypt.hashSync(req.body.pass,10) : user.pass;
            console.log(req.body.pass)
            let userModified = {
                id : user.id,
                name : req.body.name,
                email : user.email,
                pass : hashPassword,
                image : req.file ? req.file.filename : user.image,
                rol : user.rol
            }

            if(req.file){
                if(fs.existsSync(path.join(__dirname,'../public/img/users/' + user.image)) && user.image != "default.png"){
                    fs.unlinkSync(path.join(__dirname,'../public/img/users/' + user.image))

                }
            }
    
            let usersModified = users.map(user => user.id === req.session.userLogin.id ? userModified : user);

            fs.writeFileSync(path.join(__dirname,'../data/users.json'),JSON.stringify(usersModified,null,3),'utf-8');
    
            req.session.userLogin = {
                id : user.id,
                name : userModified.name,
                image : userModified.image,
                rol : user.rol
            }
    
            return res.redirect('/users/profile')
        }else{
            res.render('profile',{
                title: 'profile',
                user : users.find(user => user.id === req.session.userLogin.id),
                errors : errors.mapped()
            })
        }

       
    },

    logout: (req, res) =>{
        req.session.destroy()
        res.redirect('/')
    }

      
    }
