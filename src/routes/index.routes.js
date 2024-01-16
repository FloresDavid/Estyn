const express = require('express');
const { index,productcart, admin, searchAdmin,} = require('../controllers/indexController');
const router = express.Router();

/* / */

router
  .get('/',index)
  .get('/carrito',productcart)
  .post('/carrito',productcart)
  .get('/dashboard', admin) 
  .get("/admin/productos/buscar",searchAdmin)


module.exports = router