module.exports = (res, req, next)=>{
    if (req.cookie.petsociety) {
        req.session.userLogin = req.cookie.petsociety
    }
    next()
}