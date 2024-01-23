    const crypto = require ("crypto")

    function constructoraUsuarios(nombre, apellido, email, password) {
        this.id = crypto.randomUUID();
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = null,
        this.contraseña = password;
        this.tipo = "cliente",
        this.direccion = null,
        this.piso_depto = null,
        this.codigo_postal = null,
        this.localidad = null,
        this.provincia = null,
        this.tipo_de_tarjeta = null,
        this.nombre_de_titular = null,
        this.dni_titular = null,
        this.numero_de_tarjeta = null,
        this.fecha_de_vencimiento_de_tarjeta = null
    }

    module.exports = constructoraUsuarios