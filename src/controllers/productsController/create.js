const { JSON, mandarJSON } = require("../../data/index");
const funcionParaCrearProductos = require("../../data/funcionCreadora");


module.exports = (req,res) => {
    const productos = JSON("products")
    const imagenPrincipal = req.file
    const {name,plataform,price,stock,description,category} = req.body

    const nuevoProducto = new funcionParaCrearProductos(name,plataform,price,stock,description,category,imagenPrincipal)

    productos.push(nuevoProducto)

    mandarJSON("products",productos)

    return res.redirect('/')

}