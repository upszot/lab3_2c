let anuncio = [];

function Anuncio(titulo, transaccion, venta, descripcion, precio, nro_wc, nro_estacionamiento, nro_dormitorio, active) {
    this.titulo = titulo;
    this.transaccion = transaccion;
    this.venta = venta;
    this.descripcion = descipcion;
    this.precio = precio;
    this.nro_wc = nro_wc;
    this.nro_estacionamiento = nro_estacionamiento;
    this.nro_dormitorio = nro_dormitorio;
    this.active = active;

    Anuncio.prototype.toString = function() {
        return `this.titulo`;
    }
}