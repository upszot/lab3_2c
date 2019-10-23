$(function(){
    $("#btnCargar").click(function(){
        //llamo a cargar
        var impresion_consola = function(){
            console.log(datos);
        }
        cargarDatos(impresion_consola);
    })
 
    $("#btnAlta").click(function(){
        //creo un anuncio
        var anuncio = new Anuncio("Nuevo Anuncio",
            "venta","La descripcion del nuevo anuncio","10",
            "2","3","4");
        guardarDatos(anuncio);

    })

    $("#btnBaja").click(function(){
        //creo un anuncio
        var id = datos[datos.length-1].id;
        eliminarDato(id);

    })

    $("#btnModificacion").click(function(){
        //creo un anuncio
        var anuncio = datos[datos.length-1];
        anuncio.descripcion = "Descripcion modificada";
        modificarDato(anuncio);

    })
})

var impresion_consola = function(){
    console.log(datos);
}