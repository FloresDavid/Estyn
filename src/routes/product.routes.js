const express = require('express');
const { detail} = require('../controllers/productController');
const router = express.Router();

/* / */

router
  .get('/detail/:id?',detail)
  
 


module.exports = router