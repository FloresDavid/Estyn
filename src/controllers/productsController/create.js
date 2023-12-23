const { JSON, mandarJSON } = require("../../data/index");
const funcionParaCrearProductos = require("../../data/funcionCreadora");


module.exports = (req,res) => {
    const productos = JSON("products")

    const {id} = req.params
    const imagen = req.file
    const {name,imagenPrincipal,plataform,price,stock,description,category} = req.body

    const nuevoProducto = new funcionParaCrearProductos(name,plataform,price,stock,description,category,imagen)

    console.log(nuevoProducto)

    productos.push(nuevoProducto)

    mandarJSON("products",productos)

    return res.redirect('/')

}