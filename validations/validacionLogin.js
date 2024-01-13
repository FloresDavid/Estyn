const {check,body} = require("express-validator")
const {JSON} = require("../src/data/index")
const {compareSync,hashSync} = require('bcryptjs');

const usuarios = JSON("usuarios")

module.exports=[
    check("email").notEmpty().withMessage("debe ingresar un usuario").bail(),
    body("contraseña").notEmpty().withMessage("debe ingresar una contraseña").bail()
    .custom((value, {req}) => {
       
        const a = usuarios.find(user => user.email === req.body.email.trim())
        const t = hashSync(a.contraseña,10)
        if(!a || !compareSync(value.trim(), t)) {
            return false
        }

        return true
    }).withMessage('Contraseña incorrecta')


]