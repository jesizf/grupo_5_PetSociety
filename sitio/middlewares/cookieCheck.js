module.exports = (req,res,next) =>{
    if(req.cookies.petSociety){
        req.session.userLogin = req.cookies.petSociety
    }
    next()
}