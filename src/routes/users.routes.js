const express = require('express');
const { login, register } = require('../controllers/userController');
const router = express.Router();

/* /usuarios */
router
  .get('/ingreso',login)
  .get('/registro',register)

module.exports = router;