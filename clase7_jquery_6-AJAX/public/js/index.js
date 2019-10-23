$(function() {
    $("#btnCargar").click(function() {
        //llamo a vargar
        var impresion_consola = function() {
            console.log(datos);
        }
        cargarDatos(impresion_consola);
    });


    //$("#btnAlta").click(function);
});