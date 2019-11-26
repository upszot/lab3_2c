function Anuncio(id, titulo, descripcion, precio, transaccion, num_wc, num_estacionamiento, num_dormitorio,moneda) {
    this.id = id;
    this.titulo = titulo;
    this.transaccion = transaccion;
    this.descripcion = descripcion;
    // this.precio = precio;
    this.precio=moneda + " " + precio;
    this.num_wc = num_wc;
    this.num_estacionamiento = num_estacionamiento;
    this.num_dormitorio = num_dormitorio;
}