$(function() {

    $("#btnEnviar").click(function() {
        alert("hiciste click en el boton");
    });

    //cuadno nos posicionamos arriba
    $("p.rojo").hover(function() {
            alert("hola");
        },
        function() {
            alert("chau");
        });
})