const  {JSON} = require ("../data")
const products = JSON('products')
const cupones = JSON('cupones')
const catalogo = ["aventura","accion"]


const categorias = function(parametro){ 
    
    return pepe = products.filter(a=> a.categorias == parametro)
}

module.exports = {
    index : (req,res) => {
console.log(req.session.userLogin)
        return res.render('index',{products,categorias,catalogo})

    },
    productcart : (req,res) => {

   
    /*--- PRECIO TOTAL---*/

    const total = products.reduce((n1,n2) => n1 + n2.precio,0) 

    /*----CUPONES--------*/
    
    const {cupon} = req.body
   

    j = cupones.find(a => a.id == cupon) || {descuento:0}
    
    if (j.descuento) {
       const totalis = total / 100 * j.descuento
       return res.render('productcart',{products,totalis})
    }
    else{ const totalis = total
        return res.render('productcart',{products,totalis})}
    },
    admin : (req,res) => {

        
        return res.render('dashboard', {products})
    },
    searchAdmin: (req,res)=>{
       
        const {buscadorAdmin}=req.query
        
        const buscado = products.filter(productos =>{
            return productos.nombre.toLowerCase().includes(buscadorAdmin.toLowerCase())
        })
        
        
        return res.render("dashboard",{buscado,buscadorAdmin,products})
            }
            
}





