$(function() {

    // $("#btnEnviar").click(function() {
    //     alert("hiciste click en el boton");
    // });

    // //cuadno nos posicionamos arriba
    // $("p.rojo").hover(function() {
    //         alert("hola");
    //     },
    //     function() {
    //         alert("chau");
    //     });

    //funcion on -> 1ro evento, 2do funcion
    //
    $("p.rojo").on("click", function() {
        console.log("click capturado con funcion on");
    });

    //le paso un objeto
    $("p.rojo").on({
        "click": function() {
            console.log("hiciste click");
        },
        "mouseenter": function() {
            console.log("hiciste foco");
        },
        "mouseleave": function() {
            console.log("sacaste el mouse de foco");

        }
    });

    $("p.rojo").off("click"); //quitar el manejador de click


})