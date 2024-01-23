module.exports = (req,res,next)=>{
  if(req.session.userLogin.tipo == "admin") {
    next()
  }else{
      res.redirect('/')
  }
}