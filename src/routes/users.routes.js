const express = require('express');
const { login, register, ProssesLogin} = require('../controllers/userController');
const validacionLogin = require('../../validations/validacionLogin');
const router = express.Router();

/* /usuarios */
router
  .get('/ingreso',login)
  .get('/registro',register)
  .post("/ingreso",validacionLogin,ProssesLogin)

module.exports = router;