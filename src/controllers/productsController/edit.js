const { JSON } = require("../../data");

module.exports = (req,res) => {
    

        const {id} = req.params;
        const products = JSON('products')
        const product =  products.find (product => product.id === +id);
        return res.render('products/productEdit', {
            ...product
        })
    
}