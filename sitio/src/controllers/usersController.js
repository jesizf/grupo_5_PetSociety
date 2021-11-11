
const fs = require('fs');
const path = require('path');
const bcrypt=require('bcryptjs');
const users=require(path.join(__dirname,'../data/users.json'))

const {validationResult, body} = require('express-validator');
const db = require('../database/models');
const { builtinModules } = require('module');


module.exports = {
    
        login: (req, res) => {
            return res.render('login',{title: 'login'})
        },
        processLogin: (req, res) =>{
    
            let errors = validationResult(req);
            const {email} = req.body;

    if (errors.isEmpty()) {
        db.User.findOne({
            where: {
                email
            }
        })
            .then(user => {
                   req.session.userLogin = {
                        id: user.id,
                        name: user.name,
                        password: user.password,
                        rol : user.rolId,
                        image: user.image
                    }

                 res.cookie('petsociety', req.session.userLogin,{maxAge : 2000 * 100})
                    return res.redirect('/')
                })
                .catch(error => res.send(error)) 
                
                } else {
                    return res.render('login',{
                    title: 'login',
                    errores : errors.mapped(),
                    old : req.body
                }) 
            }
           
        },

        register: (req, res) => {
            return res.render('register',{title: 'register'})
        },
        
        processRegister : (req,res) => {
            let errors = validationResult(req);
            if (errors.isEmpty()){
                const {name,email,password} = req.body;
                db.User.create({
                    name: name.trim(),
                    email: email.trim(),
                    password: bcrypt.hashSync(password,10),
                    image: 'default.png',
                    rolId : 1,
                })
                .then(user =>{
                    req.session.userLogin ={
                        id : user.id,
                        name : user.name,
                        rol : user.rol
                    }
                    res.cookie('petsociety', req.session.userLogin,{maxAge : 2000 * 60})
                    res.locals.userLogin = req.session.userLogin

                    return res.redirect('/')
                })
                .catch(error => console.log(error))              
            }
                else{
                    return res.render('register',{
                        title:'register',
                        errores : errors.mapped(),
                        old : req.body
                    })
                }
                           
    },
    profile: (req, res) => {
        db.User.findOne({
            where : {
                id: req.session.userLogin.id
            }
        })
        .then(user =>{
            return res.render('profile',{
                title: 'profile',
                 user 
        })
        })
        .catch(error =>console.log(error))
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


    