const express = require('express');
const { index,productcart, admin, searchAdmin,} = require('../controllers/indexController');
const router = express.Router();
const esAdmin = require('../middlewares/esAdmin');

/* / */

router
  .get('/',index)
  .get('/carrito',productcart)
  .post('/carrito',productcart)
  .get('/dashboard', esAdmin, admin) 
  .get("/dashboard/buscar", esAdmin, searchAdmin)


module.exports = router