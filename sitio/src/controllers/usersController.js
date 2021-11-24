
const bcrypt=require('bcryptjs');

const {validationResult, body} = require('express-validator');
const db = require('../database/models');


module.exports = {
    
        login: (req, res) => {
            return res.render('login',{title: 'login'})
        },
        processLogin: async(req, res) =>{
            let errors = validationResult(req);
            
    if (errors.isEmpty()) {
        const {email, password} = req.body;

            try {

                let user = await db.User.findOne({
                    where:{
                        email: email
                    }  
                  }) 
                  // si el usuario no existe
                  if(!user){
                    return res.render('login',
                    {
                        title: 'login',
                        error: {
                            credenciales: 'Credenciales inválidas'
                        }
                    })
                }
                // si la contraseña no machea con la ingresada devolveme el error
                if(!bcrypt.compareSync(password, user.password)){
                    return res.render('login',
                    {
                        title: 'login',
                        error: {
                            credenciales: 'Credenciales inválidas'
                        }
                    })
                }
                // levanta la session
                req.session.userLogin = {
                    id: user.id,
                    name: user.name,
                    password: user.password,
                    rol : user.rolId,
                    image: user.image
                }

                res.cookie('petsociety', req.session.userLogin,{maxAge : 2000 * 100})
                return res.redirect('/')
            
            } catch (error) {
                console.log(error);
            }

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
        
        processRegister : async(req,res) => {
            let errors = validationResult(req);
            if (errors.isEmpty()){
                const {name,email,password} = req.body;
                try {

                    let userExist = await db.User.findOne({
                      where:{
                          email: email
                      }  
                    }) 
                    
                    //si el usuario existe
                    if(userExist){
                        return res.render('register',{
                            title: 'register',
                        error:{
                            email: 'Este email ya se encuentra registrado'
                        }})
                    }
                   // si no existe creame el usuario
                   let user = await db.User.create({
                        name: name.trim(),
                        email: email.trim(),
                        password: bcrypt.hashSync(password,10),
                        image: 'default.png',
                        rolId : 1,
                    }) 
                      // y creame la session
                    req.session.userLogin ={
                        id : user.id, // el user viene del user creado
                        name : user.name,
                        email: user.email,
                        image: user.image,
                        rol : user.rol
                    }
                    res.cookie('petsociety', req.session.userLogin,{maxAge : 2000 * 60})
                    res.locals.userLogin = req.session.userLogin
                } catch (error) {
                    console.log(error);
                }
                    return res.redirect('/users/profile')            
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
    updateProfile : async(req,res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            const { name, password } = req.body;

            try {
                let user = await db.User.findByPk(req.session.userLogin.id)

                let userResult = await db.User.update(
                    {
                        name: name.trim(),
                        password: password ? bcrypt.hashSync(password, 10) : user.password,
                        image: req.file ? req.file.filename : user.image
                    },
                    {
                        where : {
                            id : req.session.userLogin.id
                        }
                    }
                )
                req.session.userLogin ={
                    id : user.id, // el user viene del user creado
                    name : user.name,
                    email: user.email,
                    image: user.image,
                    rol : user.rol
                }
                res.cookie('petsociety', req.session.userLogin,{maxAge : 2000 * 60})
                res.locals.userLogin = req.session.userLogin
                
                return res.redirect('/users/profile')
            } catch (error) {
               console.log(error);
            }

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




  
    