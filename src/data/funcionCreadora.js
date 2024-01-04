    const crypto = require ("crypto")


    function constructora(nombre,plataforma,precio,stock,descripcion,categorias,imagenPrincipal) {
        this.id = crypto.randomUUID();
        this.nombre = nombre.trim();
        this.plataforma = plataforma;
        this.precio = +precio
        this.stock = +stock || null;
        this.descripcion = descripcion.trim();
        this.categorias = categorias;
        this.imagenPrincipal = imagenPrincipal? imagenPrincipal.filename:null;
    }

    module.exports = constructora