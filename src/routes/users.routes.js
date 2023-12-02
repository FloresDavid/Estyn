const express = require('express');
const { register,login} = require('../controllers/userController');
const router = express.Router();

/* / */

router
  .get('/register',register)
  .get('/login',login)
 


module.exports = router