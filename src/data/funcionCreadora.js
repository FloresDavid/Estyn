const crypto = require ("crypto")


function constructora(nombre,imagenPrincipal,plataforma,precio,stock,descripcion,categorias) {
    this.id = crypto.randomUUID();
    this.nombre = nombre.trim();
    this.imagenPrincipal = imagenPrincipal || null;
    this.plataforma = plataforma;
    this.precio = +precio
    this.stock = +stock || null;
    this.descripcion = descripcion.trim();
    this.categorias = categorias;
}

module.exports = constructora