const { validationResult } = require("express-validator")
const { JSON } = require("../data")
const usuarios = JSON("usuarios")
module.exports = {
    login : (req,res) => {
        return res.render('users/login')
    },
    register : (req,res) => {
        return res.render('users/register')
    },
    ProssesLogin: (req,res)=>{
        const errors = validationResult(req)
        
        if(errors.isEmpty()){

            const {email}= req.body

            const {id, nombre} = usuarios.find(user => user.email === email)

            req.session.userLogin = {id, nombre}


            return res.redirect("/")
        }
        return res.render("users/login",{errors:errors.mapped(),old:req.body})
    },
    logout:(req,res)=>{
           
        req.session.destroy();

        return res.redirect("/")
    }
    
}