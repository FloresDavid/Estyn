const { JSON, mandarJSON } = require("../../data/index");
const fs = require ("fs")
module.exports = (req,res) => {
    const productos = JSON("products")
    const {id} = req.params
	
    const BORRANDOIMAGEN = productos.find(a=> a.id == id)
	fs.existsSync("public/images/" + BORRANDOIMAGEN.imagenPrincipal) && fs.unlinkSync("public/images/" + BORRANDOIMAGEN.imagenPrincipal)
	
		const borradoCompl = productos.filter(prod => prod.id != id)


    mandarJSON("products",borradoCompl)

    return res.redirect('/')

}