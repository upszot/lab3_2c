$(function() {
    //Evento de cuando ya se termino de cargar la pagina

    //con $ le indicas que es un jquery
    //entre "" va el elemento a buscar...L0
    //y usa los mismos signos que ccs.. entonces # es para id..


    console.log($("#btnEnviar")); //seleccionar por id  
    console..log($("p")); //seleccionar por tag  
    console..log($("p.rojo")); //parrafos de la clase rojo
    console..log($("p,.rojo")); //parrafos y los de la clase rojo
    console..log($(".rojo")); //solo la clase
    console..log($("p:last")); //trae el ultimo parrafo
    console..log($("p[class=rojo]")); //


})