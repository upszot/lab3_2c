function Anuncio(id, descripcion, num_dormitorio, num_estacionamiento, num_wc, precio, titulo, transaccion,moneda)
{
    this.id=id;
    this.descripcion=descripcion;
    this.num_dormitorio=num_dormitorio;
    this.num_estacionamiento=num_estacionamiento;
    this.num_wc=num_wc;
    this.precio=moneda + " " + precio;
    this.titulo=titulo;
    this.transaccion=transaccion;
    
}
    