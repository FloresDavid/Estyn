const express = require('express');
const { detail, add, edit, create, remove, update} = require('../controllers/productsController');
const upload = require('../middlewares/upload');
const router = express.Router();

/* / */

router
  .get('/detalle/:id',detail)
  .get('/agregar', add)
  .get('/editar/:id', edit)
  .post("/agregando",upload.single("imagenPrincipal"), create)
  .delete("/eliminar/:id", remove)
  .put("/editado/:id",upload.single("imagenPrincipal"),update)
module.exports = router