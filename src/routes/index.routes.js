const express = require('express');
const { index,productcart} = require('../controllers/indexController');
const router = express.Router();

/* / */

router
  .get('/',index)
  .get('/carrito',productcart)
  .post('/carrito',productcart)


module.exports = router