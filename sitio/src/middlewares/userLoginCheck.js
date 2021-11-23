// validacion del perfil (si existe una seccion abierta me deja ingresar a la ruta del perfil, sino me redirige)

module.exports = (req,res,next) => {
    if(req.session.userLogin){
        next()
    }else{
        res.redirect('/users/login')
    }
}
