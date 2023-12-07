const  {JSON} = require ("../data")
const products = JSON('products')


module.exports = {
    index : (req,res) => {
        
        return res.render('index',{products})
    
    
    },



    productcart : (req,res) => {

   
    /*--- PRECIO TOTAL---*/

    const total = products.reduce((n1,n2) => n1 + n2.precio,0) 

    /*----CUPONES--------*/
    
    const {cupon} = req.body
    const JSONcupones = JSON('cupones')

    j = JSONcupones.find(a => a.id == cupon) || {descuento:0}
    
    if (j.descuento) {
       const totalis = total / 100 * j.descuento
       return res.render('productcart',{products,totalis})
    }
    else{ const totalis = total
        return res.render('productcart',{products,totalis})}

    
    
    
    },

}




