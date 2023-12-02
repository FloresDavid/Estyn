const express = require('express');
const { index,productcart} = require('../controllers/indexController');
const router = express.Router();

/* / */

router
  .get('/',index)
  .get('/productcart',productcart)
 


module.exports = router