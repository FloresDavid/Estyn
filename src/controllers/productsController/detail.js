const { JSON } = require("../../data");


module.exports = (req,res) => {

        const {id} = req.params;

        const products = JSON('products');
        const comentarios = JSON('comentarios');

        const product = products.find(product => product.id == id)

        return res.render('products/productDetail', {
            ...product, comentarios
        })
    }
