const { JSON, mandarJSON } = require("../../data/index");
const fs = require("fs")


module.exports = (req, res) => {
    const productos = JSON("products")
    const {id} = req.params
    const borradoImg = productos.find(a=> a.id == id)
fs.existsSync("public/images/" + borradoImg.imagenPrincipal) && fs.unlinkSync("public/images/" + borradoImg.imagenPrincipal)

    const borradoCompl = productos.filter(prod => prod.id != id)

    mandarJSON("products",borradoCompl)

return res.redirect("/dashboard")
    }


    ;