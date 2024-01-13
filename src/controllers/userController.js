const { validationResult } = require("express-validator")

module.exports = {
    login : (req,res) => {
        return res.render('users/login')
    },
    register : (req,res) => {
        return res.render('users/register')
    },
    ProssesLogin: (req,res)=>{
        const errors = validationResult(req)
        console.log(errors.mapped())
        if(errors.isEmpty()){
            return res.send("tas logueado")
        }
        return res.render("users/login",{errors:errors.mapped()})
    }
}