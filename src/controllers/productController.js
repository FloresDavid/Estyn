const { JSON } = require("../data");

module.exports = {
    detail : (req,res) => {
        
        const {id} = req.params;

        const products = JSON('products');
        const comentarios = JSON('comentarios');

        const product = products.find(product => product.id === +id)

        return res.render('products/productDetail', {
            ...product, comentarios
        })
    },
    add: (req,res) => {
        return res.render('products/productAdd')
    },
    edit: (req,res) => {

        const {id} = req.params;
        const products = JSON('products')
        const product =  products.find (product => product.id === +id);
        return res.render('products/productEdit', {
            ...product
        })
    }

}