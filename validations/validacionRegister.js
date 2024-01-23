const {check,body} = require("express-validator")
const {JSON} = require("../src/data/index")
const {compareSync,hashSync} = require('bcryptjs');

const usuarios = JSON("usuarios")

module.exports=[
    check("nombre")
    .notEmpty().withMessage("Debe ingresar un nombre").bail()
    .isAlpha().withMessage("Debe ingresar un nombre valido"),


    check("apellido")
    .notEmpty().withMessage("Debe ingresar un apellido").bail()
    .isAlpha().withMessage("Debe ingresar un apellido valido"),

    check("email")
    .notEmpty().withMessage("Debe ingresar un email").bail()
    .isEmail().withMessage("Email invalido, reingresar"),

    body("password")
    .notEmpty().withMessage("Debe ingresar una contraseña").bail()
    .isLength({min: 8}).withMessage("La contraseña debe tener minimo 8 caracteres"),

    body("password2")
    .notEmpty().withMessage("Debe ingresar la confirmacion de contraseña").bail()
    .isLength({min: 8}).withMessage("La contraseña debe tener minimo 8 caracteres")
]