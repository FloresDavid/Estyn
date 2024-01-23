const express = require('express');
const { login, register, ProssesLogin, logout, processRegister} = require('../controllers/userController');
const validacionLogin = require('../../validations/validacionLogin');
const validacionRegister = require('../../validations/validacionRegister');
const invitado = require('../middlewares/invitado');
const router = express.Router();

/* /usuarios */
router
  .get('/registro', invitado, register)
  .post('/registro',validacionRegister, processRegister)
  .get('/ingreso', invitado, login)
  .post("/ingreso",validacionLogin, ProssesLogin)
  .get("/salir", logout)

module.exports = router;