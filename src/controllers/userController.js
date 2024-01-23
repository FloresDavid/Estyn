const { validationResult } = require("express-validator")
const { JSON, mandarJSON } = require("../data")
const usuarios = JSON("usuarios")
const crearUsuarios = require("../data/funcionCreadoraUsuarios");

module.exports = {
    register : (req,res) => {
        res.render('users/register');
    },
    processRegister : (req,res) => {
        const registerErrors = validationResult(req);
        if (registerErrors.isEmpty()) {
            const usuarios = JSON("usuarios")
            const {nombre, apellido, email, password} = req.body
        
            const nuevoUsuario = new crearUsuarios(nombre, apellido, email, password)
        
            usuarios.push(nuevoUsuario)
        
            mandarJSON("usuarios",usuarios)
        
            res.redirect('/usuarios/ingreso')
        } else {
            res.render('users/register', {
                errors: registerErrors.mapped(),
                old: req.body
            });
        }
    },

    login : (req,res) => {
        return res.render('users/login')
    },
    ProssesLogin: (req,res)=>{
        const errors = validationResult(req)
        
        if(errors.isEmpty()){

            const {email}= req.body

            const {id, nombre, tipo} = usuarios.find(user => user.email === email)

            req.session.userLogin = {id, nombre, tipo}


            return res.redirect("/")
        }
        return res.render("users/login",{errors:errors.mapped(),old:req.body})
    },
    logout:(req,res)=>{
           
        req.session.destroy();

        return res.redirect("/")
    }
    
}