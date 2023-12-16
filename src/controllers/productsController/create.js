const { JSON, mandarJSON } = require("../../data/index");
const funcionParaCrearProductos = require("../../data/funcionCreadora");


module.exports = (req,res) => {
    const productos = JSON("products")

    const {id} = req.params

    const {name,imagenPrincipal,plataform,price,stock,description,category} = req.body

    const nuevoProducto = new funcionParaCrearProductos(name,imagenPrincipal,plataform,price,stock,description,category)

    console.log(nuevoProducto)

    productos.push(nuevoProducto)

    mandarJSON("products",productos)

    return res.redirect('/')

}