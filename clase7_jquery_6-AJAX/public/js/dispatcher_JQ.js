function cargarDatos(manejador) {
    datos = [];
    $.getJSON("http://localhost:3000/traerAnuncios", function(resp, status) {

        //titulo, transaccion, venta, descripcion, precio, 
        //nro_wc, nro_estacionamiento, nro_dormitorio, active)
        for (var i = 0; i < resp.data.length; i++) {
            datos.push(new Anuncio(resp.data[i].titulo,
                resp.data[i].transaccion,
                resp.data[i].venta,
                resp.data[i].descripcion,
                resp.data[i].precio,
                resp.data[i].nro_wc,
                resp.data[i].nro_estacionamiento,
                resp.data[i].nro_dormitorio,
                resp.data[i].id));
        } //fin for
        if (manejador) {
            manejador();
        }
    });

}

function guardarDatos(datos, cb) {
    $.post("http://localhost:3000/altaAnuncio", datos, function(data, status) {
        //esto es un callback como para que devuelva algo por consola
        // if (cb) {
        //     cb();
        // }

    });
}