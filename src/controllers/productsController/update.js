const { JSON, mandarJSON } = require("../../data/index");
const fs = require("fs")


module.exports = (req, res) => {
    const productos = JSON("products")
   
    const {id} = req.params
    const imagen = req.file
    const {name,plataform,price,stock,description,category} = req.body
    
    const actualizado = productos.map(products =>{
        if (products.id == id) {
            
(imagen && fs.existsSync('public/images/' + products.imagenPrincipal)) && fs.unlinkSync('public/images/' + products.imagenPrincipal)
        products.nombre = name.trim()
        products.plataforma = plataform
        products.precio= +price       
        products.stock= +stock
        products.descripcion = description.trim()      
        products.categorias= category
        products.imagenPrincipal= imagen ? imagen.filename : products.imagenPrincipal
        
        }
        return products
     })
    
     mandarJSON("products",actualizado)

     return res.redirect("/")

     } ;