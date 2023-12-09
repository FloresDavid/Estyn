const express = require('express');
const { index,productcart, admin,} = require('../controllers/indexController');
const router = express.Router();

/* / */

router
  .get('/',index)
  .get('/carrito',productcart)
  .post('/carrito',productcart)
  .get('/dashboard', admin)



module.exports = router