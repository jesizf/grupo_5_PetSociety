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
                    return res.redirect('/admin')
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
            const { name, password, image } = req.body;

            db.User.update(
                {
                    name: name.trim(),
                    password: password != null && bcrypt.hashSync(password, 10),
                    image: req.file && req.file.filename,
                },
                {
                    where : {
                        id : req.params.id
                    }
                }
            )
            
            .then( () => {
                return res.redirect('/')
            })
            
        }else{
            db.User.findByPk(req.params.id)
            .then(user =>{
                return res.render('profile',{
                    title: 'profile',
                    user,
                    errors : errors.mapped()
                })
            })
            
        }

       
    },

    logout: (req, res) =>{
        req.session.destroy()
        res.redirect('/')
    }

      
    }