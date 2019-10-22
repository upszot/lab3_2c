$(function() {

    $("#btnEnviar").click(function() {
        //console.log($("p.rojo").text());
        console.log($("p.rojo").html());
        console.log($("#btnEnviar").val());
        console.log($("#btnEnviar").attr("id"));
    });
    $("#btnCambiar").click(function() {
        $("p.rojo").text("este es el nuevo texto del parrafo rojo");
        $("p:last").html("<strong>este es el nuevo texto del ultimo</strong>");
        $("p:last").html(function(i, prevHTML) {
            //la i es el indice del elemento...
            return prevHTML + " Agrego algo HTML";
        });
    });

    $("#btnCambiar").val("nuevo cambiar"); //modifico el valor del boton.. (el texto que se ve)

    $("#btnCambiar").attr("class", "azul"); //seteo un nuevo atributo azul

    $("#btnEnviar").attr({
        "class": "azul",
        "miAtributo": "miValor"
    });

    $("#btnEnviar").attr("class", function(i, prevValue) {
        console.log("clase anterior: " + prevValue);
        return "rojo";
    });

    //creo un boton
    var boton = $("<input>").val("Nuevo Boton").attr("type", "button");
    //  var boton2 = ...(boton);
    //  $("#btnCambiar").after(boton); //lo agrego despues del boton cambiar
    //  $("#btnCambiar").before(boton); //lo agrego antes del boton cambiar

    $("body").prepend(boton); //arriba de toda la pagina

})