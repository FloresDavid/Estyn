const express = require('express');
const { detail, add, edit, create} = require('../controllers/productsController');
const router = express.Router();

/* / */

router
  .get('/detalle/:id',detail)
  .get('/agregar', add)
  .get('/editar/:id', edit)
  .post("/agregando", create)
module.exports = router