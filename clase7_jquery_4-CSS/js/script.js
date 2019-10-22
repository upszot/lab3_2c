$(function() {

    var boton = $("<input>").val("Nuevo Boton").attr("type", "button").css("margin", "100px");

    $("#btnCambiar").click(function() {

        $("body").append(boton);
        $("#btnEnviar").toggleClass("azul");
        //var b2 = ...boton;
        //$("input:last").toggleClass

    });
});